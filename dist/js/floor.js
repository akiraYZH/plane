"use strict";function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Floor=function(e){function t(){var e;return _classCallCheck(this,t),e=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)),e.numToFill=2*Math.ceil(game.viewWidth/(.5625*game.viewHeight)),e.x=0,e.floorY=game.viewHeight-.21875*game.viewHeight,e}return _inherits(t,e),_createClass(t,[{key:"update",value:function(){this.x+=game.speed,this.x>game.viewWidth&&(this.x=0),this.d_floor=this.floorY-game.bird.y,this.d_floor<game.bird.radius&&(game.is_crashed=!0)}},{key:"render",value:function(){for(var e=0;e<this.numToFill;e++)game.ctx.drawImage(game.imgCache.floor,e*game.viewHeight*.5625-this.x,this.floorY,.5625*game.viewHeight,.21875*game.viewHeight)}}]),t}(GameElement);