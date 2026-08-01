import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StfService {
  history: string[] = [];

  pushRouteHistory(routeUrl: string): void {
    this.history.unshift(routeUrl.substring(1, routeUrl.length));
    if (this.history.length > 3) {
      this.history.pop();
    }
  }
}
