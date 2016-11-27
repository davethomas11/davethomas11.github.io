"use strict";var __extends=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)},game_object_1=require("../../engine/models/game-object"),velocity_module_1=require("../../engine/modules/velocity-module"),game_1=require("../../engine/game"),Laser=function(e){function t(t,o,i){e.call(this),this.LASER_LENGTH=75,this.velocityModule=new velocity_module_1.default,this.velocityModule.constantAccelerateAtAngleXY(t,o,i),this.addModule(this.velocityModule)}return __extends(t,e),t.prototype.render=function(e){var t=this.velocityModule.angle,o=this.x+this.LASER_LENGTH*Math.cos(t),i=this.y+this.LASER_LENGTH*Math.sin(t);e.beginPath(),e.strokeStyle="#F00",e.moveTo(this.x,this.y),e.lineTo(o,i),e.stroke(),e.closePath()},t.prototype.update=function(t){e.prototype.update.call(this,t),(this.x<0||this.y<0||this.x>game_1.default.Info.viewPortWidth||this.y>game_1.default.Info.viewPortHeight)&&(this.alive=!1)},t}(game_object_1.default);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=Laser;
//# sourceMappingURL=laser.js.map
