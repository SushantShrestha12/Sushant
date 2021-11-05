window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer2", {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "TR, MR and AR Curve",
      },
      axisX:{
		valueFormat: "Number",
    title: "Units of output",
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
          name: "TR",
          showInLegend: true,
          indexLabelFontSize: 16,
          dataPoints: [
            { x:1, y: 5 }, 
            { x:2, y: 10 }, 
            { x:3, y: 15 }, 
            { x:4, y: 20 }, 
            { x:5, y: 25 },
            { x:6, y: 30 },
            { x:7, y: 35 }],
        },

        {
            type: "line",
            name: "AR=MR",
            showInLegend: true,
            indexLabelFontSize: 16,
            dataPoints: [
              { x:1, y: 5 }, 
              { x:2, y: 5 }, 
              { x:3, y: 5 }, 
              { x:4, y: 5 }, 
              { x:5, y: 5 },
              { x:6, y: 5 },
              { x:7, y: 5 }],
          },

      ],
    });
    chart.render();
  };