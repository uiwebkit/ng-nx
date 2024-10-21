import { bootstrapApplication } from '@angular/platform-browser';

import { SharedRootComponent } from '@ng-nx/shared-view';

import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(SharedRootComponent, config);

export default bootstrap;
