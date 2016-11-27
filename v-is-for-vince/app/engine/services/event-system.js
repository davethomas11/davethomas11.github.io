"use strict";var spawn_event_1=require("../events/spawn-event"),EventSystem=function(){function e(){}return e.handleEvent=function(e,t){t.constructor.name==spawn_event_1.default.name&&e.add(t.gameObject)},e}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=EventSystem;
//# sourceMappingURL=event-system.js.map
