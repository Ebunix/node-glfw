var GLFW = require('bindings')('glfw');
GLFW.debug = false;

var events;
Object.defineProperty(GLFW, 'events', {
  get: function () {
    if (events) return events;
    events = new (require('events').EventEmitter)();
    events.emit = function () {
      var args = Array.prototype.slice.call(arguments);
      var evt = args[1];
      if (events.debug) {
        console.log('emitting event: ' + require('util').inspect(args));
      }
      if (args[0] != 'quit') {
        evt.preventDefault = function () {};
        evt.stopPropagation = function () {};
      }
      events.listeners(args[0]).forEach(function (listener) {
        listener(args[1]);
      });
    };
    return events;
  },
  enumerable: true,
  configurable: true,
});
module.exports = { GLFW };
