"use strict";function _typeof(t){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Hero=function(t){function e(){var t;return _classCallCheck(this,e),t=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this)),t.img=["hero1","hero2","hero3","hero4","hero5","hero6"],t.count=0,t.from=2,t.is_changed=!1,t.ready_to_shoot=!1,t.crashed=!1,t.width=game.myCanvas.width/4.8,t.height=1.24*game.myCanvas.width/4.8,t.x=(game.myCanvas.width-t.width)/2,t.y=game.myCanvas.height-100,t.x_origin=0,t.y_origin=0,t.touch_x=t.x,t.touch_y=t.y,game.myCanvas.onmousemove=function(t){var e=t||window.event;(t.clientX<$(game.myCanvas).position().left+game.bomb.x||t.clientX>$(game.myCanvas).position().left+game.bomb.x+game.bomb.width||t.clientY<$(game.myCanvas).position().top+game.bomb.y||t.clientY>$(game.myCanvas).position().top+game.bomb.y+game.bomb.height)&&(this.x=e.clientX-$(game.myCanvas).offset().left-this.width/2,this.y=e.clientY-$(game.myCanvas).offset().top-this.height/2)}.bind(_assertThisInitialized(t)),game.myCanvas.ontouchstart=function(t){var e=(t||window.event,t.targetTouches[0]);event.targetTouches.length>1||event.scale&&1!==event.scale||(this.x_origin=e.clientX,this.y_origin=e.clientY)}.bind(_assertThisInitialized(t)),game.myCanvas.ontouchmove=function(t){var e=(t||window.event,t.targetTouches[0]);event.targetTouches.length>1||event.scale&&1!==event.scale||(console.log(e.clientX-this.x_origin),this.x=this.touch_x+(e.clientX-this.x_origin)-$(game.myCanvas).offset().left-this.width/2,this.y=this.touch_y+(e.clientY-this.y_origin)-$(game.myCanvas).offset().top-this.height/2)}.bind(_assertThisInitialized(t)),t}return _inherits(e,t),_createClass(e,[{key:"update",value:function(){var t=this;this.ready_to_shoot||(this.ready_to_shoot=!0,setTimeout(function(){t.crashed||(new HeroBullet(t.x+.1*t.width,t.y),new HeroBullet(t.x+.9*t.width-9*game.myCanvas.width/480,t.y)),t.ready_to_shoot=!1},200)),this.is_changed||(this.is_changed=!0,this.crashed?(game.myCanvas.onmousemove=null,this.count=this.from++,this.count>=6&&(game.is_crashed=!0,game.gameItems=game.gameItems.filter(function(e){return e!=t}))):++this.count>1&&(this.count=0),setTimeout(function(){t.is_changed=!1},200))}},{key:"render",value:function(){game.ctx.drawImage(game.imgCache[this.img[this.count]],this.x,this.y,this.width,this.height)}}]),e}(GameElement);