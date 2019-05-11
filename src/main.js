// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import UniversalEvents, { UniversalEventsToken } from 'fusion-plugin-universal-events';
import BrowserPerformanceEmitter from 'fusion-plugin-browser-performance-emitter';
import PerformanceLogging from './plugins/PerformanceLogging';

import root from './root.js';

export default () => {
  const app = new App(root);
  app.register(Styletron);
  app.register(Router);
  app.register(UniversalEventsToken, UniversalEvents);
  app.register(BrowserPerformanceEmitter);
  app.register(PerformanceLogging);
  return app;
};
