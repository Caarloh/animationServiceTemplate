import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WebcamModule } from 'ngx-webcam';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ButtonBarComponent } from './components/button-bar/button-bar.component';
import { ClientButtonComponent } from './components/client-button/client-button.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { WhoComponent } from './components/who/who.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';

import { AuthService } from './services/auth-service';
import { SessionComponent } from './components/session/session.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CameraComponent } from './components/camera/camera.component';
import { AnimationService } from './services/animation-service.service';
import { FaceApiService } from './services/face-api.service';
import { VideoPlayerService } from './services/video-player.service';
import { VideoPlayerComponent } from './components/video-player/video-player.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ButtonBarComponent,
    ClientButtonComponent,
    HomeComponent,
    LandingComponent,
    WhoComponent,
    ProductsComponent,
    ProductCardComponent,
    ContactComponent,
    LoginComponent,
    SessionComponent,
    SidenavComponent,
    CameraComponent,
    VideoPlayerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    WebcamModule,
  ],
  //Que hayan componentes en providers significa que puedes llamar funciones de ellos desde otros componentes
  providers: [AuthService, AnimationService, FaceApiService, VideoPlayerService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
