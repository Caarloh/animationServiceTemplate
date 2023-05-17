import { Component, Injectable, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service';
import { AnimationService } from 'src/app/services/animation-service.service';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('loginAnimation', [
      state('hide', style({
        right: '-55%'
      })),
      state('show', style({
        right: '0%'
      })),
      transition('hide => show', animate('600ms ease-out')),
      transition('show => hide', animate('600ms ease-in'))
    ])
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  authError = false;

  state = "";
  active = false;

  constructor(
    private formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private animationService: AnimationService,
  ) {
    this.animationService.stateLogin.subscribe(state => {
      this.state = state;
      this.active = (state == 'hide' ? false : true);
    });
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }


  onSubmit() {
    let user = this.loginForm.value.email;
    let pass = this.loginForm.value.password;
    this.login(user, pass);
  }

  private login(user: string, pass: string) {
    this.loginHide();
    this.loginDone("loginAnimation")
    this.animationService.loginDone$.subscribe((done) => {
      if (done) {
        this.animationService.toggleDashboard('show');
        this.animationService.toggleSidenav('show');
        console.log('La animación ha terminado.');
      }
    });
    // this.isLoading = true;
    // this.authService.login(user, pass).subscribe(
    //   response => {
    //     this.loginHide();
    //     this.loginDone("loginAnimation")
    //     this.animationService.loginDone$.subscribe((done) => {
    //       if (done) {
    //         this.animationService.toggleDashboard('show');
    //         this.animationService.toggleSidenav('show');
    //         console.log('La animación ha terminado.');
    //       }
    //     });
    //     this.authError = false;
    //     this.isLoading = false;
    //   },
    //   error => {
    //     console.error('Error en la autenticación:', error);
    //     this.authError = true;
    //     this.isLoading = false;
    //   }
    // );
  }

  loginDone(animationName: string) {
    this.animationService.notifyLoginDone(animationName);
  }

  loginHide() {
    const html = document.documentElement;
    html.style.overflowY = 'auto';
    this.animationService.toggleLogin('hide');
  }
}