"use strict";var ArrayUtils=function(){function e(){}return e.remove=function(e,r){var n=r.indexOf(e);return n!=-1&&(r.splice(n,1),!0)},e.addToSet=function(e,r){var n=r.indexOf(e);return n==-1&&(r.push(e),!0)},e.getByType=function(e,r){var n=null;return r.forEach(function(r){r.constructor.name==e.name&&(n=r)}),n},e}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=ArrayUtils;
//# sourceMappingURL=array-utils.js.map
