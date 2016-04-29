// import { jsdom } from 'jsdom'
import bluebird from 'bluebird'
//
// global.document = jsdom('<!doctype html><html><body></body></html>')
// global.window = document.defaultView
// global.navigator = global.window.navigator
global.Promise = bluebird
