import { createPlugin } from 'fusion-core';
import { UniversalEventsToken } from 'fusion-plugin-universal-events';

export default createPlugin({
  deps: { emitter: UniversalEventsToken },
  provides: deps => {
    const emitter = deps.emitter;
    console.log("----------------------")
    emitter.on('browser-performance-emitter:stats', e => {
      console.log("----", e); // log events to console
    });
  }
});