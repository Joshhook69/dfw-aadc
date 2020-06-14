$(document).ready(function(){
var arr = [0, 0]

//const data = [{"callsign": "SWA354", "cid": "1459238", "realname": "Nick Haynie KGEG", "clienttype": "PILOT", "frequency": null, "latitude": 43.50939, "longitude": -116.01437, "altitude": 41078, "groundspeed": 493, "planned_aircraft": "B737", "planned_tascruise": "450", "planned_depairport": "KPDX", "planned_altitude": "41000", "planned_destairport": "KDEN", "server": "USA-WEST", "protrevision": 100, "rating": 1, "transponder": 2000, "facilitytype": 0, "visualrange": 0, "planned_revision": "0", "planned_flighttype": "I", "planned_deptime": "2055", "planned_actdeptime": "0", "planned_hrsenroute": "2", "planned_minenroute": "25", "planned_hrsfuel": "3", "planned_minfuel": "43", "planned_altairport": "KCOS", "planned_remarks": " /v/", "planned_route": "WHAMY4 IMB BOI OCS MJANE FLATI1", "planned_depairport_lat": 0.0, "planned_depairport_lon": 0.0, "planned_destairport_lat": 0.0, "planned_destairport_lon": 0.0, "atis_message": null, "time_last_atis_received": "2020-05-31T21:47:26.2704738Z", "time_logon": "2020-05-31T21:47:26.2704735Z", "heading": 120, "qnh_i_hg": 30.0, "qnh_mb": 1016, "actual_deptime": "2155", "distance": 553.07569496058, "ESTHOURERT": "1", "ESTMINERT": 14, "planned_arrtime": "2315", "gate": "FLATI", "index": 2, "status": "Active"}, {"callsign": "DAL6555", "cid": "1308631", "realname": "Pete Melomo KDEN", "clienttype": "PILOT", "frequency": null, "latitude": 39.85283, "longitude": -104.67766, "altitude": 7376, "groundspeed": 19, "planned_aircraft": "B738/L", "planned_tascruise": "463", "planned_depairport": "KMSP", "planned_altitude": "36000", "planned_destairport": "KDEN", "server": "USA-WEST", "protrevision": 100, "rating": 1, "transponder": 3660, "facilitytype": 0, "visualrange": 0, "planned_revision": "4", "planned_flighttype": "I", "planned_deptime": 2231, "planned_actdeptime": "0", "planned_hrsenroute": "1", "planned_minenroute": "36", "planned_hrsfuel": "3", "planned_minfuel": "14", "planned_altairport": "KEGE", "planned_remarks": " /v/", "planned_route": "SCHEP9 ONL PORDR AALLE1", "planned_depairport_lat": 0.0, "planned_depairport_lon": 0.0, "planned_destairport_lat": 0.0, "planned_destairport_lon": 0.0, "atis_message": null, "time_last_atis_received": "2020-05-31T21:47:28.2624728Z", "time_logon": "2020-05-31T21:47:28.2624724Z", "heading": 181, "qnh_i_hg": 30.06, "qnh_mb": 1018, "actual_deptime": "2155", "distance": 0.5695450923377646, "ESTHOURERT": "0", "ESTMINERT": 0, "planned_arrtime": "2231", "gate": "AALLE", "index": 1, "EstimatedATMin": "31", "EstimatedATHour": "22", "status": "Arrived"}, {"callsign": "CPA876", "cid": "1374884", "realname": "Daniel Lai VHHH", "clienttype": "PILOT", "frequency": null, "latitude": 35.50555, "longitude": 142.24493, "altitude": 33046, "groundspeed": 558, "planned_aircraft": "H/B77W/L", "planned_tascruise": "505", "planned_depairport": "VHHH", "planned_altitude": "31000", "planned_destairport": "KDEN", "server": "SINGAPORE", "protrevision": 100, "rating": 1, "transponder": 2200, "facilitytype": 0, "visualrange": 0, "planned_revision": "0", "planned_flighttype": "I", "planned_deptime": "1840", "planned_actdeptime": "0", "planned_hrsenroute": "13", "planned_minenroute": "15", "planned_hrsfuel": "14", "planned_minfuel": "55", "planned_altairport": "KCOS", "planned_remarks": "PBN/A1B1C1D1L1O1S2 DOF/200531 REG/BKPM EET/RCAA0034 RJJJ0123 KZAK0530 KZOA1100 KZLC1145 KZDV1236 OPR/CPA PER/D RALT/RJCM PACD KMFR RMK/TCAS SIMBRIEF /v/", "planned_route": "OCEAN2B OCEAN V3 ENVAR M750 LEKOS R583 BORDO Z29 GAKIA Y293 YULIA Y57 DOMBI/N0496F330 Y57 POROT OTR11 LEPKI 39E60 42E70 44E80/N0489F350 44N70 43N60 42N50 41N40/N0484F370 40N30 SHENU RBL BAM J154 TCH J56 CHE TOMSN8", "planned_depairport_lat": 0.0, "planned_depairport_lon": 0.0, "planned_destairport_lat": 0.0, "planned_destairport_lon": 0.0, "atis_message": null, "time_last_atis_received": "2020-05-31T21:47:30.5981371Z", "time_logon": "2020-05-31T21:47:30.5981367Z", "heading": 55, "qnh_i_hg": 29.97, "qnh_mb": 1015, "actual_deptime": "2155", "distance": 4964.643563640208, "ESTHOURERT": "9", "ESTMINERT": 50, "planned_arrtime": "0751", "gate": "TOMSN", "index": 10, "status": "Active"}, {"callsign": "AAL832", "cid": "933980", "realname": "John Mullen KCLT", "clienttype": "PILOT", "frequency": null, "latitude": 39.91173, "longitude": -104.68672, "altitude": 10254, "groundspeed": 150, "planned_aircraft": "H/B788/L", "planned_tascruise": "479", "planned_depairport": "KATL", "planned_altitude": "40000", "planned_destairport": "KDEN", "server": "USA-EAST", "protrevision": 100, "rating": 1, "transponder": 473, "facilitytype": 0, "visualrange": 0, "planned_revision": "3", "planned_flighttype": "I", "planned_deptime": "1920", "planned_actdeptime": "1920", "planned_hrsenroute": "2", "planned_minenroute": "35", "planned_hrsfuel": "3", "planned_minfuel": "57", "planned_altairport": "KEGE", "planned_remarks": "+VFPS+/V/WWW.JOINAVA.ORG", "planned_route": "CUTTN2 HANKO MEM RZC BVO GCK KIISS CLASH1", "planned_depairport_lat": 0.0, "planned_depairport_lon": 0.0, "planned_destairport_lat": 0.0, "planned_destairport_lon": 0.0, "atis_message": null, "time_last_atis_received": "2020-05-31T21:47:32.4812469Z", "time_logon": "2020-05-31T21:47:32.4812465Z", "heading": 188, "qnh_i_hg": 30.01, "qnh_mb": 1016, "actual_deptime": "2155", "distance": 3.069991603441191, "ESTHOURERT": "0", "ESTMINERT": 1, "planned_arrtime": "2202", "gate": "CLASH", "index": 1, "status": "Arrived"}, {"callsign": "DAL1470", "cid": "1329345", "realname": "zachary hazen KMSP", "clienttype": "PILOT", "frequency": null, "latitude": 41.00116, "longitude": -106.84836, "altitude": 37280, "groundspeed": 463, "planned_aircraft": "B738/L", "planned_tascruise": "452", "planned_depairport": "KSEA", "planned_altitude": "35000", "planned_destairport": "KDEN", "server": "USA-EAST", "protrevision": 100, "rating": 1, "transponder": 2200, "facilitytype": 0, "visualrange": 0, "planned_revision": "1", "planned_flighttype": "I", "planned_deptime": "1830", "planned_actdeptime": "1830", "planned_hrsenroute": "2", "planned_minenroute": "8", "planned_hrsfuel": "3", "planned_minfuel": "39", "planned_altairport": "KBFF", "planned_remarks": "+VFPS+/V/CHARTS ON BOARD", "planned_route": "SUMMA2 SUMMA J54 BKE KU81M PIH OCS MJANE FLATI1", "planned_depairport_lat": 0.0, "planned_depairport_lon": 0.0, "planned_destairport_lat": 0.0, "planned_destairport_lon": 0.0, "atis_message": null, "time_last_atis_received": "2020-05-31T21:47:33.8879386Z", "time_logon": "2020-05-31T21:47:33.8879384Z", "heading": 115, "qnh_i_hg": 30.22, "qnh_mb": 1023, "actual_deptime": "2155", "distance": 120.67127460378615, "ESTHOURERT": "0", "ESTMINERT": 16, "planned_arrtime": "2217", "gate": "FLATI", "index": 1, "status": "Active"}]

var fa = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var dep = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

//RNAV
var BRDJE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var BEREE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var BOOVE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var VKTRY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var ERROR = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var data = []

$.get('/dfw-data.json', myData => {
	data = myData;

//data = JSON.parse(data)
//Array.prototype.forEach.call(data, flight => {
data.forEach(flight => {
    index = flight['index']
    gate = flight['gate']
    status = flight['status']
    if(status == "Departing"){
        dep[index] = dep[index] + 1
    }
    if(status == "Active"){
        fa[index] = fa[index] + 1
    }
    if(status == "Arrived"){
        arr[index] = arr[index] + 1
    }
    if(gate == "BRDJE"){
        BRDJE[index] = BRDJE[index] +1
    }
    else if(gate == "BEREE"){
        BEREE[index] = BEREE[index] +1
    }
    else if(gate == "BOOVE"){
        BOOVE[index] = BOOVE[index] +1
    }
    else if(gate == "VKTRY"){
        VKTRY[index] = VKTRY[index] +1
    }
    else{
        ERROR[index] = ERROR[index] +1
    }
});

var ctx = document.getElementById('myChart');
var d = new Date();
var min = d.getUTCMinutes();
if(min < 10){
	min = '0'+min;
} else {
	min = min;
}
var hour = d.getUTCHours();
if(hour < 10){
        hour = '0'+hour;
} else {
        hour = hour;
}
document.getElementById("time").innerHTML = d.getUTCMonth()+1+"/"+d.getUTCDate()+"/"+d.getUTCFullYear()+" "+hour+":"+min+"z";
var UH = d.getUTCHours();
UH = UH-1;
if(UH < 0){
	UH = UH+24;
}
var lab = []
for(var i = 0; i<16; i++){
        var UT = UH+i;
        if(UT > 23){
                UT = UT-24;
        }
        if(UT.toString().length == 1){
                UT = "0" + UT
        }
        lab.push(UT+"00");
}
ctx.height = 400;
var myChart = new Chart(ctx, {
    type: 'bar',

    // The data for our dataset
    data: {
        labels: lab,
        datasets: [{
            label: 'Arrived',
            backgroundColor: '#000000',
            borderColor: '#000',
            data: arr,
                        barPercentage: 0.6

                }, {
            label: 'Flight Active',
            backgroundColor: '#ff0000',
            borderColor: '#000',
            data: fa,
                        barPercentage: 0.6

                }, {
            label: 'Departing',
            backgroundColor: '#00ff00',
            borderColor: '#000',
            data: dep,
                        barPercentage: 0.6

                }, {
                        label: 'Arrival Rate',
                        data: [114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114],
                        type: 'line',
                        backgroundColor: 'rgba(0,0,0, 0.01)',
                        borderColor: 'rgba(0, 0, 0, 1)',
                        pointRadius: 0,
                        pointHitRadius: 50
        }]
    },
    options: {
                maintainAspectRatio: false,
                scales: {
                        xAxes: [{
                stacked: true
            }],
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 150,
                    stepSize: 25
                },
                                stacked: true
            }]
        }
    }
});

var ctx2 = document.getElementById('myChart2');
ctx2.height = 400;
var myChart = new Chart(ctx2, {
    type: 'bar',

    // The data for our dataset
    data: {
        datasets: [{
            label: 'BRDJE',
            backgroundColor: '#ff0000',
            borderColor: '#000',
            data: BRDJE,
                        barPercentage: 0.6

                }, {
            label: 'BEREE',
            backgroundColor: '#ff8482',
            borderColor: '#000',
            data: BEREE,
                        barPercentage: 0.6

                }, {
            label: 'BOOVE',
            backgroundColor: '#ffbf00',
            borderColor: '#000',
            data: BOOVE,
                        barPercentage: 0.6

                }, {
            label: 'VKTRY',
            backgroundColor: '#ffdc84',
            borderColor: '#000',
            data: VKTRY,
                        barPercentage: 0.6

                }, {
            label: 'OTHER',
            backgroundColor: '#000',
            borderColor: '#000',
            data: ERROR,
                        barPercentage: 0.6

                }],
                labels: lab
    },
    options: {
                maintainAspectRatio: false,
                scales: {
                        xAxes: [{
                stacked: true
            }],
            yAxes: [{
		ticks: {
		    suggestedMin: 0,
                    suggestedMax: 75
		},
                stacked: true
            }]
        }
    }
});

});

});

