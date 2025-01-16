import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UniLoadingService {

  totalRequests = 0;
  isLoading: WritableSignal<boolean> = signal(false);

  setLoading(isLoading: boolean): void {
    this.isLoading.set(isLoading);
  }
}
