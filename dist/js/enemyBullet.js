"use strict";function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var EnemyBullet=function(e){function t(e,o){var r;return _classCallCheck(this,t),r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)),r.img="bullet2",r.hit=!1,r.is_bullet=!0,r.x=e,r.y=o,r.width=9*game.myCanvas.width/480,r.height=21*game.myCanvas.width/480,r}return _inherits(t,e),_createClass(t,[{key:"update",value:function(){var e=this;this.y+=4,(this.y>game.myCanvas.height||this.hit)&&game.gameItems.forEach(function(t,o){t==e&&game.gameItems.splice(o,1)}),this.x+this.width>game.hero.x+5&&this.x<game.hero.x+game.hero.width-5&&this.y<game.hero.y+game.hero.height-5&&this.y+this.height>game.hero.y+5&&0==game.hero.crashed&&(this.hit=!0,game.hero.crashed=!0)}},{key:"render",value:function(){game.ctx.drawImage(game.imgCache[this.img],this.x,this.y,this.width,this.height)}}]),t}(GameElement);