window.onload = function () {
    var chart3 = new CanvasJS.Chart("chartContainer4", {
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
            { x:2, y: 16 }, 
            { x:3, y: 18 }, 
            { x:4, y: 16 }, 
            { x:5, y: 10 },],
        },

        {
            type: "line",
            name: "MR",
            showInLegend: true,
            indexLabelFontSize: 16,
            dataPoints: [
              { x:1, y: 10 }, 
              { x:2, y: 6 }, 
              { x:3, y: 2 }, 
              { x:4, y: -2 }, 
              { x:5, y: -6 },],
          },

          {
            type: "line",
            name: "AR",
            showInLegend: true,
            indexLabelFontSize: 16,
            dataPoints: [
              { x:1, y: 10 }, 
              { x:2, y: 8 }, 
              { x:3, y: 6 }, 
              { x:4, y: 4 }, 
              { x:5, y: 2 },],
          },

      ],
    });
    chart3.render();
  };