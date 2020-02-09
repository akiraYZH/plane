"use strict";function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Gameover=function(e){function t(){var e;return _classCallCheck(this,t),e=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)),e.is_gameover=!0,e.confirm_width=112*game.myCanvas.width/480,e.confirm_height=28*game.myCanvas.width/480,e.confirm_left=(game.myCanvas.width-e.confirm_width)/2,e.confirm_right=e.confirm_left+e.confirm_width,e.confirm_top=game.myCanvas.height-100,e.confirm_bottom=e.confirm_top+e.confirm_height,e.resumeY=e.confirmY=game.myCanvas.height,e.opacity=0,e.showSpeed=40,e}return _inherits(t,e),_createClass(t,[{key:"update",value:function(){game.is_crashed?(this.resumeY=0,this.confirmY=game.myCanvas.height-100,clearInterval(game.enemy1_timer),clearInterval(game.enemy2_timer),clearInterval(game.enemy3_timer),game.gameItems.forEach(function(e,t){e.is_bg||e.is_gameover||game.gameItems.splice(t,1)}),game.score>game.best&&(game.best=game.score),game.myCanvas.onclick=this.restore.bind(this)):this.resumeY=this.confirmY=game.myCanvas.height}},{key:"render",value:function(){game.ctx.save(),game.ctx.drawImage(game.imgCache.gameover,0,this.resumeY,game.myCanvas.width,game.myCanvas.height),game.ctx.save(),game.ctx.textAlign="center",game.ctx.fillStyle="black",game.ctx.font="20px impact",game.ctx.fillText(game.score,game.myCanvas.width/2+this.resumeY,.75*game.myCanvas.height),game.ctx.fillText(game.best,game.myCanvas.width/2+this.resumeY,.4*game.myCanvas.height),game.ctx.restore(),game.ctx.drawImage(game.imgCache.restore,this.confirm_left,this.confirmY,this.confirm_width,this.confirm_height),game.ctx.restore()}},{key:"restore",value:function(e){e.clientX-$(game.myCanvas).position().left>this.confirm_left&&e.clientX-$(game.myCanvas).position().left<this.confirm_right&&e.clientY-$(game.myCanvas).position().top>this.confirm_top&&e.clientY-$(game.myCanvas).position().top<this.confirm_bottom&&game.start()}}]),t}(GameElement);