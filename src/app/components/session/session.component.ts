import { Component } from '@angular/core';
import { AnimationService } from 'src/app/services/animation-service.service';
import { AuthService } from 'src/app/services/auth-service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
  animations: [
    trigger('dashboardAnimation', [
      state('hide', style({
        right: '-90%'
      })),
      state('show', style({
        right: '0%'
      })),
      transition('hide => show', animate('700ms ease-out')),
      transition('show => hide', animate('700ms ease-in'))
    ])
  ]
})
export class SessionComponent {
  state = ""; 
  active = false;

  constructor(private readonly authService: AuthService, private animationService: AnimationService) {
    this.animationService.stateDashboard.subscribe(state => {
      this.state = state;
      this.active = (state == 'hide' ? false : true);
    });
   }

  

  dashboardHide(){
    const html = document.documentElement;
    html.style.overflowY = 'auto';
    this.state = "hide";
  }
}
