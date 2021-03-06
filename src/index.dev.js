/* eslint-disable */
/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

// Install `electron-debug` with `devtron`
import { BrowserWindow, session } from 'electron';
import path from 'path';

// require('electron-debug')({ showDevTools: false });

// Install `vue-devtools`
require('electron').app.on('ready', async () => {
  // let installExtension = require('electron-devtools-installer')
  // installExtension.default(installExtension.VUEJS_DEVTOOLS)
  //   .then(() => {})
  //   .catch(err => {
  //     console.log('Unable to install `vue-devtools`: \n', err)
  //   })

  await session.defaultSession.loadExtension(path.join(__dirname, '../devTools/vue-devtools'))
});

// Require `main` process to boot app
require('./index');
