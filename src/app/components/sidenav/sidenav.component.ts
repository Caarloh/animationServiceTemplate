import { Component } from '@angular/core';
import { AnimationService } from 'src/app/services/animation-service.service';
import { AuthService } from 'src/app/services/auth-service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('sidenavAnimation', [
      state('hide', style({
        left: '-10vw'
      })),
      state('show', style({
        left: '0vw'
      })),
      transition('hide => show', animate('700ms ease-out')),
      transition('show => hide', animate('700ms ease-in'))
    ])
  ]
})
export class SidenavComponent {
  state = "show"; 
  active = false;

  constructor(private readonly authService: AuthService, private animationService: AnimationService) {
    this.animationService.stateSidenav.subscribe(state => {
      this.state = state;
      this.active = (state == 'hide' ? false : true);
    });
   }

  

  sidenavHide(){
    const html = document.documentElement;
    html.style.overflowY = 'auto';
    this.state = "hide";
  }

  logout(){
    this.authService.logout();
    this.animationService.toggleDashboard('hide');
    this.animationService.toggleSidenav('hide');
  }

  faceId(){
    this.animationService.toggleCamera('show');
  }
}
