$(function () {

    // Prepare demo data
    var data = [

        {
            "hc-key": "us-ca-041",
            "value": 11
        },
        {
            "hc-key": "us-ca-075",
            "value": 12
        },
        {
            "hc-key": "us-ca-095",
            "value": 13
        },
        {
            "hc-key": "us-ca-097",
            "value": 14
        },
        {
            "hc-key": "us-ca-055",
            "value": 15
        },
        {
            "hc-key": "us-ca-013",
            "value": 16
        },
        {
            "hc-key": "us-ca-077",
            "value": 18
        },
        {
            "hc-key": "us-ca-067",
            "value": 21
        },
        {
            "hc-key": "us-ca-099",
            "value": 23
        },

        {
            "hc-key": "us-ca-081",
            "value": 37
        },
        {
            "hc-key": "us-ca-087",
            "value": 38
        },
        {
            "hc-key": "us-ca-085",
            "value": 39
        },
        {
            "hc-key": "us-ca-029",
            "value": 40
        },
        {
            "hc-key": "us-ca-005",
            "value": 41
        },
        {
            "hc-key": "us-ca-113",
            "value": 42
        },
        {
            "hc-key": "us-ca-033",
            "value": 43
        },
        {
            "hc-key": "us-ca-045",
            "value": 44
        },
        {
            "hc-key": "us-ca-103",
            "value": 45
        },
        {
            "hc-key": "us-ca-023",
            "value": 46
        },
        {
            "hc-key": "us-ca-093",
            "value": 47
        },
        {
            "hc-key": "us-ca-027",
            "value": 48
        },
        {
            "hc-key": "us-ca-001",
            "value": 49
        },
        {
            "hc-key": "us-ca-037",
            "value": 50
        },
        {
            "hc-key": "us-ca-025",
            "value": 51
        },
        {
            "hc-key": "us-ca-021",
            "value": 52
        },
        {
            "hc-key": "us-ca-107",
            "value": 53
        },
        {
            "hc-key": "us-ca-019",
            "value": 54
        },
        {
            "hc-key": "us-ca-015",
            "value": 55
        },
        {
            "hc-key": "us-ca-105",
            "value": 56
        },
        {
            "hc-key": "us-ca-051",
            "value": 57
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {
        chart: {
            events: {
                load: function () {
                    this.mapZoom(0.16,500,-5000);
                },
            }
        },

        title : {
            text : 'Organizations'
        },

        subtitle : {
            text : 'Bay Area'
        },

        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },


        // plotOptions: {
        //     map: {
        //         states: {
        //             hover: {
        //                 color: '#EEDD66'
        //             }
        //         }
        //     }
        // },



        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-ca-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {

                hover: color = '#BADA55'
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            },
            point: {
                events : {
                    click : function(){
                        console.log(this.path.fill)
                    }
                }
            },

        }]
    });
    // $('#container').highcharts().mapZoom(0.5, 100, 100).center(50,50);
});
