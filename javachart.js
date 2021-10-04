// </-------For Line Graph-------/>

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Production Possibility Curve",
    },
    axisX:{
      valueFormat: "Number",
      title: "Consumers Goods(in MT)",
      crosshair: {
        enabled: true,
        snapToDataPoint: true
      }
    },
      axisY: {
      title: "Caital Goods(in MT)",
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
          { x:0, y: 10 }, 
          { x:1, y: 9 }, 
          { x:2, y: 7 }, 
          { x:3, y: 4 }, 
          { x:4, y: 0 }],
      },
    ],
  });
  chart.render();
};

