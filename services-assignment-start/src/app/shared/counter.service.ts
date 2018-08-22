import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  active2inactive = 0;
  inactive2active = 0;

  constructor() { }

  countActive2Inactive() {
    this.active2inactive += 1;
    console.log('Active to Inactives: ' + this.active2inactive);
  }

  countInactive2Active() {
    this.inactive2active += 1;
    console.log('Inactives to Actives: ' + this.inactive2active);
  }
}
