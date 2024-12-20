import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'bootstrap/dist/bootstrap.bundle.min.js';

import 'bootstrap/dist/jquery-3.6.0.min.js';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
