import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  actvePageBehavior =  new BehaviorSubject('');
  actvePageIconBehavior =  new BehaviorSubject('');
  navbarControlBehavior = new BehaviorSubject(false);
  
}
