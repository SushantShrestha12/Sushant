window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer3", {
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
            { x:1, y: 10 }, 
            { x:2, y: 18 }, 
            { x:3, y: 24 }, 
            { x:4, y: 28 }, 
            { x:5, y: 30 },
            { x:6, y: 30 },
            { x:7, y: 28 }],
        },

        {
            type: "line",
            name: "MR",
            showInLegend: true,
            indexLabelFontSize: 16,
            dataPoints: [
              { x:1, y: 10 }, 
              { x:2, y: 8 }, 
              { x:3, y: 6 }, 
              { x:4, y: 4 }, 
              { x:5, y: 2 },
              { x:6, y: 0 },
              { x:7, y: -2 }],
          },

          {
            type: "line",
            name: "AR",
            showInLegend: true,
            indexLabelFontSize: 16,
            dataPoints: [
              { x:1, y: 10 }, 
              { x:2, y: 9 }, 
              { x:3, y: 8 }, 
              { x:4, y: 7 }, 
              { x:5, y: 6 },
              { x:6, y: 5 },
              { x:7, y: 4 }],
          },

      ],
    });
    chart.render();
  };