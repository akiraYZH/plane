"use strict";function ownKeys(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(i),!0).forEach(function(e){_defineProperty(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function _defineProperty(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}var Game=function(){function t(e){var i=this;_classCallCheck(this,t),this.myCanvas=document.querySelector("#game"),this.ctx=this.myCanvas.getContext("2d"),this.dataURL="../js/resourses.json",this.imgsURL={},this.imgCache={},this.timer=null,this.enemy1_timer=null,this.enemy2_timer=null,this.enemy3_timer=null,this._interval=20,this.is_crashed=!1,this.is_start=!1,this.is_stop=!1,this.gameItems=[],this.speed=0,this.score=0,this.best=0,$(window).width()<500&&($(this.myCanvas).attr("width",$(window).width()),$(this.myCanvas).attr("height",$(window).height())),this.getData().then(function(t){i.imgsURL=_objectSpread({},t);var e=0,n=Object.keys(i.imgsURL).length;for(var s in i.imgsURL)i.imgCache[s]=new Image,i.imgCache[s].src=i.imgsURL[s],i.imgCache[s].addEventListener("load",function(){i.ctx.clearRect(0,0,i.myCanvas.width,i.myCanvas.height),e++,i.ctx.font="30px impact",i.ctx.fillStyle="white",i.ctx.textAlign="center",i.ctx.fillText("Loading...(".concat(e,"/").concat(n,")"),i.myCanvas.width/2,i.myCanvas.height/2),e==n&&i.init()})})}return _createClass(t,[{key:"getData",value:function(){return $.ajax({url:this.dataURL})}},{key:"init",value:function(){this.bg=new Background,this.gameover=new Gameover,this.title=new Title,this.myCanvas.onclick=this.start.bind(this),this.timer=setInterval(this.main.bind(this),this._interval)}},{key:"main",value:function(){this.ctx.clearRect(0,0,this.viewWidth,this.viewHeight),this.gameItems.forEach(function(t){t.render(),t.update()}),this.ctx.save(),this.ctx.textAlign="left",this.ctx.fillStyle="white",this.ctx.strokeStyle="grey",this.ctx.lineWidth=2,this.ctx.fillText(this.score,20,40),this.ctx.strokeText(this.score,20,40),this.ctx.restore(),this.score>this.best&&(this.best=this.score),this.ctx.save(),this.ctx.font="14px impact",this.ctx.textAlign="center",this.ctx.fillStyle="white",this.ctx.fillText("Best: "+this.best,7*game.myCanvas.width/8,38),this.ctx.restore()}},{key:"start",value:function(){this.hero=new Hero,this.stop_btn=new Stop,this.bomb=new Bomb,this.myCanvas.onclick=this.clickable.bind(this),this.enemy1_timer=setInterval(function(){new Enemy1},2e3),this.enemy2_timer=setInterval(function(){new Enemy2},4e3),this.enemy3_timer=setInterval(function(){new Enemy3},8e3),this.is_start=!0,this.is_crashed=!1,this.score=0}},{key:"clickable",value:function(t){this.stop(t),this.bomb.bomb(t)}},{key:"stop",value:function(t){var t=t||window.event;t.clientX<$(this.myCanvas).position().left+game.stop_btn.x||t.clientX>$(this.myCanvas).position().left+game.stop_btn.x+game.stop_btn.width||t.clientY<$(this.myCanvas).position().top+game.stop_btn.y||t.clientY>$(this.myCanvas).position().top+game.stop_btn.y+game.stop_btn.height||(this.is_stop?(game.is_stop=!1,this.timer=setInterval(this.main.bind(this),this._interval),this.enemy1_timer=setInterval(function(){new Enemy1},2e3),this.enemy2_timer=setInterval(function(){new Enemy2},4e3),this.enemy3_timer=setInterval(function(){new Enemy3},8e3)):(this.is_stop=!0,clearInterval(this.timer),clearInterval(this.enemy1_timer),clearInterval(this.enemy2_timer),clearInterval(this.enemy3_timer),this.gameItems.forEach(function(t){t.update(),t.render()})))}}]),t}();