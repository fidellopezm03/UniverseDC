import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { spinnerInterceptor } from './spinner.interceptor';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  withFetch,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([spinnerInterceptor])),
  ],
};
