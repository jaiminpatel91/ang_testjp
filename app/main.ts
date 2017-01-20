import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(sucess => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
