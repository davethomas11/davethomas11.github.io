"use strict";var __extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},keyboard_mapping_1=require("./keyboard-mapping"),BasicKeyboardMovementMapping=function(e){function t(t,n){var r=this;e.call(this),this.velocityModule=t,this.registerOnDown(n.left,function(){return r.velocityModule.accelerateLeft()}),this.registerOnDown(n.right,function(){return r.velocityModule.accelerateRight()}),this.registerOnDown(n.up,function(){return r.velocityModule.accelerateUp()}),this.registerOnDown(n.down,function(){return r.velocityModule.accelerateDown()}),this.registerOnUp(n.left,function(){return r.velocityModule.decelerateLeft()}),this.registerOnUp(n.right,function(){return r.velocityModule.decelerateRight()}),this.registerOnUp(n.up,function(){return r.velocityModule.decelerateUp()}),this.registerOnUp(n.down,function(){return r.velocityModule.decelerateDown()})}return __extends(t,e),t}(keyboard_mapping_1.default);exports.BasicKeyboardMovementMapping=BasicKeyboardMovementMapping;var Keyset=function(){function e(e,t,n,r){this.up=t,this.down=r,this.left=e,this.right=n}return e}();exports.Keyset=Keyset;
//# sourceMappingURL=basic-keyboard-movement.js.map
