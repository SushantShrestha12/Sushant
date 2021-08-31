window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Production Possibility Curve"
        },
        data: [{        
            type: "line",
              indexLabelFontSize: 16,
            dataPoints: [
                { y: 10 },
                { y: 9 },
                { y: 7 },
                { y: 4 },
                { y: 0 },
            ]
        }]
    });
    chart.render();
    }