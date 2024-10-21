import { bootstrapApplication } from '@angular/platform-browser';

import { SharedRootComponent } from '@ng-nx/shared-view';

import { appConfig } from './app/app.config';

bootstrapApplication(SharedRootComponent, appConfig).catch(err => console.error(err));
