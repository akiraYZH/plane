"use strict";function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Enemy2=function(e){function t(){var e;return _classCallCheck(this,t),e=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)),e.img=["enemy2_1","enemy2_2","enemy2_3","enemy2_4","enemy2_5","enemy2_6"],e.count=0,e.from=1,e.is_enemy=!0,e.is_changed=!1,e.ready_to_shoot=!1,e.crashed=!1,e.hp=20,e.score=3,e.width=69*game.myCanvas.width/480,e.height=95*game.myCanvas.width/480,e.x=e.getRdm(0,game.myCanvas.width-e.width),e.y=-e.height,e}return _inherits(t,e),_createClass(t,[{key:"update",value:function(){var e=this;0==this.hp&&(this.crashed=!0),this.ready_to_shoot||(this.ready_to_shoot=!0,setTimeout(function(){e.crashed||new EnemyBullet(e.x+(e.width-9)/2,e.y+e.height),e.ready_to_shoot=!1},2e3)),this.y+=1,this.y>game.myCanvas.height&&game.gameItems.forEach(function(t,o){t==e&&game.gameItems.splice(o,1)}),this.is_changed||(this.is_changed=!0,this.crashed?(this.count=this.from++,this.count>=6&&game.gameItems.forEach(function(t,o){t==e&&(game.score+=e.score,game.gameItems.splice(o,1))})):this.count=0,setTimeout(function(){e.is_changed=!1},200)),game.hero.x+game.hero.width>this.x&&game.hero.x<this.x+this.width&&game.hero.y<this.y+this.height&&game.hero.y+game.hero.height>this.y&&0==this.crashed&&(game.hero.crashed=!0)}},{key:"render",value:function(){game.imgCache[this.img[this.count]]&&game.ctx.drawImage(game.imgCache[this.img[this.count]],this.x,this.y,this.width,this.height)}}]),t}(GameElement);