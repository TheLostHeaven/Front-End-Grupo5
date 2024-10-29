import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { layoutModule } from './app/layout/layout.module';


platformBrowserDynamic().bootstrapModule(layoutModule)
  .catch(err => console.error(err));
