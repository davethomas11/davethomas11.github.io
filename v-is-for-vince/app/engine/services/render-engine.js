"use strict";var game_1=require("../game"),RenderEngine=function(){function e(){}return e.render=function(e,r){e.clearRect(0,0,game_1.default.Info.viewPortWidth,game_1.default.Info.viewPortHeight),r.forEach(function(r){return r.render(e)})},e}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=RenderEngine;
//# sourceMappingURL=render-engine.js.map
