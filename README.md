# Toggle CanvasJS Chart to Fullscreen

This plugin allows you to toggle CanvasJS chart to fullscreen

## CanvasJS
CanvasJS is built from ground up for high performance data visualization and can render millions of data points in a matter of milliseconds. Charts are beautiful and API is very simple to use.
![CanvasJS Chart Fullscreen](https://raw.githubusercontent.com/vishwas-r/CanvasJS-Chart-FullScreen/main/screenshots/togglefullscreen.jpg)

## How to Use?

### Importing Script
Import the CanvasJS & CanvasJS Toggle FullScreen scritps
```
/* HTML Script Tag */
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/canvasjs-charts-toggle-fullscreen/dist/canvasjschart-fullscreen.min.js"></script>

/* or */
import CanvasJS from './canvasjs.min';
window.CanvasJS = CanvasJS;
require('canvasjs-technical-indicators');

/* React */
import CanvasJSReact from './canvasjs.react';
window.CanvasJS = CanvasJSReact.CanvasJS;
require('canvasjs-technical-indicators');
```

### Pass chart-options & render the chart
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
- Plugin was last tested with **CanvasJS Chart v3.7.2GA**
- This plugin requires you to have CanvasJS License. Please visit **[CanvasJS](https://canvasjs.com/license/)** for more info.

<a href="https://www.buymeacoffee.com/vishwas.r" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="200"/></a>
