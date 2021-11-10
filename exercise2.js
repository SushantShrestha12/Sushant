window.onload = function () {
    var chart4 = new CanvasJS.Chart("chartContainer5", {
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
            { x:1, y: 20 }, 
            { x:2, y: 40 }, 
            { x:3, y: 60 }, 
            { x:4, y: 80 }, 
            { x:5, y: 100 },],
        },

        {
            type: "line",
            name: "MR",
            showInLegend: true,
            indexLabelFontSize: 16,
            dataPoints: [
              { x:1, y: 20  }, 
              { x:2, y: 20 }, 
              { x:3, y: 20 }, 
              { x:4, y: 20  }, 
              { x:5, y: 20  },],
          },
      ],
    });
    chart4.render();
  };