import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  // @ViewChild('ruta', { static: true })
  // ruta!: ElementRef;

  // ngOnInit() {
  //   this.ruta.nativeElement.src = './intro-bg.jpg';
  // }
}
