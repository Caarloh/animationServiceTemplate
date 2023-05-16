import { Component } from '@angular/core';
import { AnimationService } from 'src/app/services/animation-service.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'toolbar-client-button',
  templateUrl: './client-button.component.html',
  styleUrls: ['./client-button.component.scss'],

})
export class ClientButtonComponent {
  constructor(private animationService: AnimationService) { }
  hidden = true;

  toggleLogin() {
    const html = document.documentElement;
    this.animationService.toggleLogin('show');
    html.style.overflowY = 'hidden';
  }
}
