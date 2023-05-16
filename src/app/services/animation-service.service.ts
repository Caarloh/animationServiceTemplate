import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private loginAnimator = new BehaviorSubject<string>('hide');
  stateLogin = this.loginAnimator.asObservable();

  private loginDoneSource = new BehaviorSubject<string>('');
  loginDone$: Observable<string> = this.loginDoneSource.asObservable();

  private dashboardAnimator = new BehaviorSubject<string>('hide');
  stateDashboard= this.dashboardAnimator.asObservable();

  private sidenavAnimator = new BehaviorSubject<string>('hide');
  stateSidenav= this.sidenavAnimator.asObservable();


  
  constructor() {}

  notifyLoginDone(nombreAnimacion: string) {
    this.loginDoneSource.next(nombreAnimacion);
  }

  toggleLogin(state: string) {
    this.loginAnimator.next(state);
  }

  toggleDashboard(state: string){ 
    console.log(state)
    this.dashboardAnimator.next(state);
  }

  toggleSidenav(state: string) {
    this.sidenavAnimator.next(state);
  }
}