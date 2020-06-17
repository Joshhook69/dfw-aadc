import urllib.request
import json
import math
import datetime
import time
counter = 0
while(True):
    print(counter)
    now = datetime.datetime.utcnow()
    hour = now.strftime("%H")
    min = int(now.strftime("%M"))
    minx = min / 0.6
    #print("Current time : " + now.strftime("%H%M") + "z")


    def distance(lat1, lon1):
        lat2, lon2 = 32.8972316, -97.0376949
        radius = 6371  # km

        dlat = math.radians(lat2 - lat1)
        dlon = math.radians(lon2 - lon1)
        a = math.sin(dlat / 2) * math.sin(dlat / 2) + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon / 2) * math.sin(dlon / 2)
        c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
        d = radius * c * 0.5399568035

        return d


    def ERTCalc(flight):
        # Knots are NM/Hour
        flight.update({"distance": distance(flight["latitude"], flight["longitude"])})
        ERT = flight["distance"] / (int(flight["planned_tascruise"]))
        HOURERT = str(round(ERT, 2)).split(".")[0]
        MINERT = round(int(str(round(ERT, 2)).split(".")[1])*.6)
        flight.update({"ESTHOURERT": HOURERT})
        flight.update({"ESTMINERT": MINERT})

    def GroundCalculation(flight):
        if int(flight["planned_tascruise"]) < 50:
            ##No TAS retarded Pilot
            flight["planned_tascruise"] = 350
        ERTCalc(flight)
        EstimatedATHour = 0
        EstimatedATMin = 0

        if flight["planned_deptime"] == 0:
            ##No Dep Time retarded pilot
            flight["planned_deptime"] = now.strftime("%H%M") + 30

        # Verify Planned Departure Time
        if int(flight["planned_deptime"]) < (int(now.strftime("%H%M")) - 30) or int(flight["planned_deptime"]) > (int(now.strftime("%H%M")) + 30):
            flight["planned_deptime"] = int(now.strftime("%H%M")) + 30
            if(flight["planned_deptime"]%100 > 60):
                flight["planned_deptime"] = flight["planned_deptime"] + 40
        if int(flight["planned_deptime"]) < 100:
            EstimatedATHour = flight["ESTHOURERT"]
            EstimatedATMin = flight["planned_deptime"] + flight["planned_deptime"]
        else:
            EstimatedATHour = int(flight["ESTHOURERT"]) + int(str(flight["planned_deptime"])[:-2])
            EstimatedATMin = int(flight["ESTMINERT"]) + int(str(flight["planned_deptime"])[-2:])
        while(int(EstimatedATMin) > 59):
            EstimatedATMin = int(EstimatedATMin) - 60
            EstimatedATHour = int(EstimatedATHour) + 1
        if(int(EstimatedATHour) > 23):
            EstimatedATHour = int(EstimatedATHour) -  24
        if(int(EstimatedATHour) == 0):
            EstimatedATHour = "00"
        elif(int(EstimatedATHour) < 10):
            EstimatedATHour = "0" + str(EstimatedATHour)
        else:
            EstimatedATHour = str(EstimatedATHour)
        if(int(EstimatedATMin) == 0):
            EstimatedATMin = "00"
        elif(int(EstimatedATMin) < 10):
            EstimatedATMin = "0" + str(EstimatedATMin)
        else:
            EstimatedATMin = str(EstimatedATMin)
        flight.update({'EstimatedATMin': EstimatedATMin})
        flight.update({'EstimatedATHour': EstimatedATHour})
        planned_arrtime = str(item['EstimatedATHour']) + str(item['EstimatedATMin'])
        flight.update({'planned_arrtime': planned_arrtime})

    #Calculate Planned Arrival time using SCH Dep time and Planned ERT
    def AirCalculation(flight):
        if int(flight["planned_tascruise"]) < 50:
            ##No TAS retarded Pilot
            flight["planned_tascruise"] = 350

        ERTCalc(flight)
        planned_arrtime = 0
        planned_arrhour = int(flight["ESTHOURERT"]) + int(str(now.strftime("%H%M"))[:-2])
        planned_arrmin = int(flight["ESTMINERT"]) + int(str(now.strftime("%H%M"))[-2:])
        if(planned_arrmin > 59):
            planned_arrmin -= 60
            planned_arrhour += 1
        if(int(planned_arrhour) > 23):
            planned_arrhour -= 24
        if(int(planned_arrhour) == 0):
            planned_arrhour = "00"
        elif(int(planned_arrhour) < 10):
            planned_arrhour = "0" + str(planned_arrhour)
        if(int(planned_arrmin) == 0):
            planned_arrmin = "00"
        if(int(planned_arrmin) < 10):
            planned_arrmin = "0" + str(planned_arrmin)
        planned_arrtime = str(planned_arrhour) + str(planned_arrmin)
        flight.update({'planned_arrtime': planned_arrtime})
        


    try:
        urllib.request.urlretrieve("http://cluster.data.vatsim.net/vatsim-data.json", "./vatsim-data.json")
    except:
        print("Unable to fetch VATSIM Data")
    with open("./vatsim-data.json", errors='ignore') as jsondata:
        data = json.load(jsondata)

    with open("/var/www/vswalife.com/dfw-aadc/public/dfw-data.json", errors='ignore') as activedendata:
        activedata = json.load(activedendata)



    online = data["clients"]
    for item in online:
        if item["clienttype"] == "ATC":
            online.remove(item)
    prefile = data["prefiles"]

    DENArr = []
    for item in online:
        if item["planned_destairport"] == "KDFW":
            DENArr.append(item)

    onlineCallsigns = []
    for item in DENArr:
        onlineCallsigns.append(item["callsign"])

    CallsignList = []
    for item in activedata:
        CallsignList.append(item["callsign"])
    for item in DENArr:
        if not item['callsign'] in CallsignList:
            item.update({'actual_deptime': 0})
            activedata.append(item)
        else:
            for flight in activedata:
                if(item['callsign'] == flight['callsign']):
                    flight.update({'latitude': item['latitude']})
                    flight.update({'longitude': item['longitude']})
                    flight.update({'groundspeed': item['groundspeed']})
    if(int(now.strftime("%M")) == 0):
        for item in activedata:
            if not item['callsign'] in onlineCallsigns:
                activedata.remove(item)


    def flightactive(flight):
        if(flight["distance"] < 5):
            flight.update({'status': "Arrived"})
        elif(flight['groundspeed'] > 50 and flight['actual_deptime'] == 0):
            flight.update({'actual_deptime': now.strftime("%H%M")})
        elif(flight['groundspeed'] > 50):
            flight.update({'status': "Active"})
        else:
            flight.update({'status': "Departing"})

    def Gate(flight):
        route = flight['planned_route'].upper()
        gate = ""
        if "BRDJE" in route:
            gate = "BRDJE"
        elif "SEEVR" in route:
            gate = "BRDJE"
        elif "BEREE" in route:
            gate = "BEREE"
        elif "WHINY" in route:
            gate = "BEREE"
        elif "SOCKK" in route:
            gate = "BOOVE"
        elif "BOOVE" in route:
            gate = "BOOVE"
        elif "VKTRY" in route:
            gate = "VKTRY"
        elif "JOVEM" in route:
            gate = "VKTRY"
        else:
            gate = "ERROR"
        flight.update({"gate": gate})
#        print(gate)
    def index(flight):
        if(int(flight['planned_arrtime']) < 100):
            hourarr = 0
        else:
            hourarr = int(flight['planned_arrtime'][:-2])
        hour = int(now.strftime("%H"))
        if(hour > hourarr):
            hour -= 24
        index = (hourarr - hour + 1)
        flight.update({'index': index})

    for item in activedata:
        if(item['groundspeed'] < 50):
            GroundCalculation(item)
        else:
            AirCalculation(item)
        flightactive(item)
        Gate(item)
        index(item)
    with open('/var/www/vswalife.com/dfw-aadc/public/dfw-data.json', 'w') as json_file:
	    json.dump(activedata, json_file)
    time.sleep(60)
    counter += 1
