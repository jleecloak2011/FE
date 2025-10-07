import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app';
import { routes } from './app/app.routes';

export default function bootstrap() {
  return bootstrapApplication(AppComponent, {
    providers: [
      provideServerRendering(),
      provideRouter(routes),
      provideHttpClient()
    ]
  });
}
