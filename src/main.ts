import 'jquery/dist/jquery.min.js';
import 'tether/dist/js/tether.min.js';
import 'bootstrap/dist/js/bootstrap.js';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
