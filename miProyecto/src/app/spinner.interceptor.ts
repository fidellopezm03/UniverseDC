import { HttpInterceptorFn } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  let _ngxUiLoaderService = inject(NgxUiLoaderService);
  let _activeRequest = 0;
  if (_activeRequest === 0) {
    _ngxUiLoaderService.start();
  }
  _activeRequest++;

  return next(req).pipe(
    finalize(() => {
      _activeRequest--;
      if (_activeRequest === 0) _ngxUiLoaderService.stop();
    })
  );
};
