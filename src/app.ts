import { Router, RouterConfiguration } from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';
require('font-awesome/css/font-awesome.css');

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Northern VA CodeCamp';
    config.options.pushState = true;
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: PLATFORM.moduleName('./pages/welcome/index'), nav: true, title: 'Welcome' },
      { route: 'speakers', name: 'speakers', moduleId: PLATFORM.moduleName('./pages/speakers/index'), nav: true, title: 'Speakers' },
      { route: 'sessions', name: 'sessions', moduleId: PLATFORM.moduleName('./pages/sessions/index'), nav: true, title: 'Sessions' }
    ]);

    this.router = router;
  }
}