/** ****************************************************************************
 * Info router.
 *****************************************************************************/
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import { Log } from 'helpers';
import CONFIG from 'config';
import App from 'app';
import CommonController from '../common/controller';
import InfoMenuController from './menu/controller';
import './brc_approved/BRC_approved_logo.png';
import './brc_approved/styles.scss';
import './help/swipe_record.png';
import './credits/sponsor_logo.png';

App.info = {};

const Router = Marionette.AppRouter.extend({
  routes: {
    'info(/)': InfoMenuController.show,
    'info/about(/)': () => {
      CommonController.show({
        title: 'About',
        App,
        route: 'info/about/main',
        model: new Backbone.Model({
          version: CONFIG.version,
          build: CONFIG.build,
        }),
      }); },
    'info/help(/)': () => {
      CommonController.show({
        title: 'Help', App, route: 'info/help/main',
      }); },
    'info/privacy(/)': () => {
      CommonController.show({
        title: 'Privacy Policy', App, route: 'info/privacy/main',
      }); },
    'info/brc-approved(/)': () => {
      CommonController.show({
        title: 'BRC Approved', App, route: 'info/brc_approved/main',
      }); },
    'info/credits(/)': () => {
      CommonController.show({
        title: 'Credits', App, route: 'info/credits/main',
      }); },
    'info/*path': function () { App.trigger('404:show'); },
  },
});

App.on('info', () => {
  App.navigate('info');
  InfoMenuController.show();
});

App.on('info:about', () => {
  App.navigate('info/about');
  CommonController.show({
    title: 'About',
    App,
    route: 'info/about/main',
    model: new Backbone.Model({ version: CONFIG.version }),
  });
});

App.on('info:help', () => {
  App.navigate('info/help');
  CommonController.show({
    title: 'Help', App, route: 'info/help/main',
  });
});

App.on('info:privacy', () => {
  App.navigate('info/privacy');
  CommonController.show({
    title: 'Privacy Policy', App, route: 'info/privacy/main',
  });
});

App.on('info:brc-approved', () => {
  App.navigate('info/brc-approved');
  CommonController.show({
    title: 'BRC Approved', App, route: 'info/brc_approved/main',
  });
});

App.on('info:credits', () => {
  App.navigate('info/credits');
  CommonController.show({
    title: 'Credits', App, route: 'info/credits/main',
  });
});

App.on('before:start', () => {
  Log('Info:router: initializing');
  App.info.router = new Router();
});
