import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

import { UniLoadingService } from './loading.service';

export function uniLoadingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const loadingService = inject(UniLoadingService);

  loadingService.totalRequests++;
  loadingService.setLoading(true);

  return next(request).pipe(
    finalize(() => {
      loadingService.totalRequests--;

      if (loadingService.totalRequests === 0) {
        loadingService.setLoading(false);
      }
    })
  );
}
