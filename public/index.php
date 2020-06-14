<!DOCTYPE html>
<html>
        <head>
                <meta http-equiv="X-UA-Compatible" content="IE=11,10,9"/>
                <base href="."/>
                <title>AADC - KDFW</title>
                <meta name="viewport" content="width=device-width,initial-scale=1">
                <link href="styles.1a0f2c06eaf52ecc62cc.bundle.css" rel="stylesheet"/>
        </head>
        <body style="background-color:#FFFFFF">
                <aadc-app _nghost-c0="" ng-version="4.3.5">
                        <div _ngcontent-c0="" id="version">v2.0.0 - Raaj Patel</div>
                                <div _ngcontent-c0="" class="container-fluid">
                                        <div _ngcontent-c0="" class="row">
                                        <div _ngcontent-c0="" style="text-align: center;">
                                                <h3 _ngcontent-c0=""><img _ngcontent-c0="" height="40" src="assets/images/icon.png" width="326"><span _ngcontent-c0="" style="padding-left:20px;"></span>Airport Arrival Demand Chart</h3>
                                                        <text x="681" text-anchor="middle" class="highcharts-title" style="color:#333333;font-size:18px;fill:#333333;" y="24"><tspan>DFW</tspan></text>
                                                        <br>
                                                        <text x="681" text-anchor="middle" class="highcharts-subtitle" style="color:#666666;fill:#666666;" y="52"><tspan><span id="time"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cancelled Flights: 0&nbsp;&nbsp;&nbsp;&nbsp;No GDP</tspan></text>
                                        </div>
                                        </div>
                        </div>
                </aadc-app>

                <div class="chart-container" style="position: relative; height:400px;">
                <canvas id="myChart"></canvas>
                </div>
                <div class="chart-container" style="position: relative; height:400px;">
                <canvas id="myChart2"></canvas>
                </div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
                <script type="text/javascript" src="dfw-data.json"></script>
                <script type="text/javascript" src="main.js"></script>
        </body>
</html>

