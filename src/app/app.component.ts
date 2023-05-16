import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {slide} from './route-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slide,
  //   slider,
  //   transformer,
  //   stepper
  ]

})
export class AppComponent {
  title = 'tiuque';

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
