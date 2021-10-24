(function(){
    var CanvasJS = window.CanvasJS || CanvasJS ? window.CanvasJS : null;
    if (CanvasJS) {
      CanvasJS.Chart.prototype.fullScreen = function() {
        var chart = this;
        if(this.options && this.options.toggleFullScreen) {
          if(!this.fullScreenButton) {
            var base64Img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASklEQVQ4jWNgYGD4jwVvZ8AE23GopZ4BtQwMDJ5QbILFABMk+VpsBnhi0YQLeFLVgO1QjM3ZuIAJkr5RwECFQBz4dEC1pDwwuREA04pTVQrMQ/IAAAAASUVORK5CYII=";

            var fullScreenButton = document.createElement('button');
            var img = document.createElement("IMG");
            img.setAttribute("src", base64Img);
            img.style.cssText = "height: 95%; pointer-events: none";
            fullScreenButton.appendChild(img);

            fullScreenButton.style.cssText = "position: relative; display: inline-block; padding: 5px 10px;height: 25px;cursor: pointer; text-align: center; text-decoration: none; background-color:" + chart.toolbar.itemBackgroundColor + "; border-style: none;";

            if(chart.exportEnabled) { 
              fullScreenButton.style.borderLeft = chart.toolbar.buttonBorderThickness + "px solid " + chart.toolbar.buttonBorderColor;
              chart._toolBar.style.border = chart.toolbar.buttonBorderThickness + "px solid " + chart.toolbar.buttonBorderColor;
            }



            fullScreenButton.addEventListener("mouseover", function () {
              this.style.cssText += "background-color: " + chart.toolbar.itemBackgroundColorOnHover + "; color: " + chart.toolbar.fontColorOnHover;
              this.childNodes[0].style.cssText += "filter: invert(100%)";
            });

            fullScreenButton.addEventListener("mouseout", function () {
              this.style.cssText = this.style.cssText + "background-color: " + chart.toolbar.itemBackgroundColor;            
              this.childNodes[0].style.cssText += "filter: invert(0%)";
            });

            fullScreenButton.addEventListener("click", function () {
              if (!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement)) {
                chart.container.requestFullscreen().catch(err => {
                  alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
              } else {
                document.exitFullscreen();
              }
            });

            this.fullScreenButton = fullScreenButton;
            this._toolBar.appendChild(this.fullScreenButton);

            if(chart.zoomEnabled){
              chart._resetButton.addEventListener("click", function(e){
                if(chart.exportEnabled) {
                  chart.fullScreenButton.style.borderLeft = chart.toolbar.buttonBorderThickness + "px solid " + chart.toolbar.buttonBorderColor;
                  chart._toolBar.style.border = chart.toolbar.buttonBorderThickness + "px solid " + chart.toolbar.buttonBorderColor;
                }
              });

              var observer = new MutationObserver(function(mutationsList, observer) {
                for (var mutation of mutationsList){
                  if(mutation.attributeName === "style") {
                    chart.fullScreenButton.style.borderLeft = chart.toolbar.buttonBorderThickness + "px solid " + (chart._zoomButton.style.display === "inline" ? chart.toolbar.buttonBorderColor : "transparent");
                  }
                }
              });
              observer.observe(chart._zoomButton, { attributes: true});
            }
          }
        }
      }
      
      var chartRender = CanvasJS.Chart.prototype.render;
      CanvasJS.Chart.prototype.render = function (options) {
        var result = chartRender.apply(this, arguments);				
        this.fullScreen();
        return result ;
      }
    }
  })();