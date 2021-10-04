window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer2", {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "TR, MR and AR Curve",
      },
      axisX:{
		valueFormat: "Number",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
    axisY: {
		title: "TR, MR an AR",
		includeZero: true,
		crosshair: {
			enabled: true
		}
	},
    
      data: [
        {
          type: "line",
          indexLabelFontSize: 16,
          dataPoints: [
            { y: 5 }, 
            { y: 10 }, 
            { y: 15 }, 
            { y: 20 }, 
            { y: 25 },
            { y: 30 },
            { y: 35 }],
        },

        {
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: [
              { y: 5 }, 
              { y: 5 }, 
              { y: 5 }, 
              { y: 5 }, 
              { y: 5 },
              { y: 5 },
              { y: 5 }],
          },

      ],
    });
    chart.render();
  };