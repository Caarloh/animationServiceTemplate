import { Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from 'src/app/services/auth-service';
import { AnimationService } from 'src/app/services/animation-service.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('hide', style({
        opacity: 0
      })),
      state('show', style({
        opacity: 1
      })),
      transition('hide => show', animate('400ms ease-out')),
      transition('show => hide', animate('400ms ease-in'))
    ])
  ]
})
export class CameraComponent {
  state = "show"; 
  active = false;
  
  constructor(private readonly authService: AuthService, private animationService: AnimationService) {
    this.animationService.stateSidenav.subscribe(state => {
      this.state = state;
      this.active = (state == 'hide' ? false : true);
    });
   }

  @ViewChild('videoElement') videoElement!: ElementRef;
  stream!: MediaStream;

  ngOnInit() {
    this.startCamera();
  }

  async startCamera() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.videoElement.nativeElement.srcObject = this.stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  }

  stopCamera() {
    this.stream.getTracks().forEach(track => track.stop());
  }
}