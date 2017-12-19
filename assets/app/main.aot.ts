import './polyfills';

import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from './app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);