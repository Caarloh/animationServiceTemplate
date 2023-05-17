import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AnimationService } from 'src/app/services/animation-service.service';
import { AuthService } from 'src/app/services/auth-service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FaceApiService } from 'src/app/services/face-api.service';
import { VideoPlayerService } from 'src/app/services/video-player.service';

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

  constructor(
    private readonly authService: AuthService, 
    private animationService: AnimationService, 
    private renderer2: Renderer2, private elementRef: ElementRef, 
    private faceApiService: FaceApiService,
    private videoPlayerService: VideoPlayerService) {
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
  buttons = [
    {
      name: 'Compartir',
      icon: 'uil uil-share'
    },
    {
      name: 'Rastreo',
      icon: 'uil uil-focus-target'
    },
    {
      name: 'Compartir',
      icon: 'uil uil-confused'
    },
    {
      name: 'Compartir',
      icon: 'uil uil-save'
    }
  ];


  public listSubscribers: any = [];
  public currentStream: any;
  public dimensionVideo: any;
  public previewCanvas: any;
  public listExpressions: any;

  ngOnInit(): void {
    this.checkMediaSource();
    this.getSizeCam();
    this.listObserver();
  }

  ngOnDestroy(): any {
    this.listSubscribers.forEach((a: { unsubscribe: () => any; }) => a.unsubscribe());
  }

  getSizeCam = () => {
    const element = document.querySelector('.cam');
    const {width, height} = element!.getBoundingClientRect();
    this.dimensionVideo = {width, height};

  };

  checkMediaSource = () => {
    if (navigator && navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        this.currentStream = stream;
      }).catch(() => {
        console.log('************* ERROR ************ Algo ocurrio obteniendo el video');
      });
    } else {
      console.log('******* ERROR **** No existe camara');
    }
  };


  getAI($event: any): any {
    const {globalFace} = this.faceApiService;
    this.previewCanvas = globalFace.createCanvasFromMedia($event.interface);
    this.renderer2.setProperty(this.previewCanvas, 'id', 'new-canvas-preview');
    const blockPreview = document.querySelector('.space-preview');
    this.renderer2.appendChild(blockPreview, this.previewCanvas);

    //
    // this.imgElement = globalFace.createCanvasFromMedia(this.videoElement.nativeElement);
    // // this.imgElementSmall = globalFace.createCanvasFromMedia(this.videoElement.nativeElement);
    // this.renderer2.setProperty(this.imgElement, 'id', 'new-canvas');
    // this.renderer2.appendChild(this.elementRef.nativeElement, this.imgElement);
  }

  listObserver = () => {
    const {globalFace} = this.faceApiService;
    const element = document.querySelector('.space-preview');
    const {width} = element!.getBoundingClientRect();
    const observer1$ = this.videoPlayerService.cbAi.subscribe(({resizedDetections, displaySize, expressions}) => {
      resizedDetections = resizedDetections[0];
      this.listExpressions = this.listExpressions.map(expressions, (value: any, key: any) => {
        return {
          name: key,
          value
        };
      });
      this.previewCanvas.getContext('2d').clearRect(0, 0, displaySize.width, displaySize.height);
      if (true) {
        const scale = width / displaySize.width;
        // console.log(scale);
        // globalFace.draw.drawDetections(this.previewCanvas, resizedDetections);
        globalFace.draw.drawFaceLandmarks(this.previewCanvas, resizedDetections);
        // globalFace.draw.drawFaceExpressions(this.imgElement, resizedDetections);
      }
    });

    this.listSubscribers.push(observer1$);
  };
}
