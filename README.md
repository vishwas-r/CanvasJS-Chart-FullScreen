# Toggle CanvasJS Chart to Fullscreen

This plugin allows you to toggle CanvasJS chart to fullscreen

## CanvasJS
CanvasJS is built from ground up for high performance data visualization and can render millions of data points in a matter of milliseconds. Charts are beautiful and API is very simple to use.


### How to Use?
- Set toggleFullScreen to true under chart option
- Render the chart

```
var chart = new CanvasJS.Chart("chartContainer", {
    .
    .
    .
	toggleFullScreen: true,
    //Chart Options
    .
    .
    .
});
chart.render();
```

##### Note: 
- Plugin was last tested with **CanvasJS Chart v3.4.4GA**
- This plugin requires you to have CanvasJS License. Please visit **[CanvasJS](https://canvasjs.com/license/)** for more info.
