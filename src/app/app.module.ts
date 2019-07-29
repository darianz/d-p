// ANGULAR 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {FormsModule} from '@angular/forms';

// END OF ANGULAR

// PAGES 
import { HomeComponent } from './pages/home/home.component';
import { WeddingsComponent } from './pages/weddings/weddings.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BusinessComponent } from './pages/business/business.component';
import { LoginComponent } from './pages/login/login.component';
import { VideoEditComponent } from './pages/video-edit/video-edit.component';

// END OF PAGES

// SHARED
import { ServerHandelerService } from './shared/server-handeler.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
//End OF SERVICES

// HEADER
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { MobileNavComponent } from './header/mobile-nav/mobile-nav.component';
// END OF HEADER

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { VideosComponent } from './videos/videos.component';
//End OF VIDEOS


// SERVER
import { LoginGuard } from './pages/login/login.guard';

// END OF SERVER



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeddingsComponent,
    HeaderComponent,
    NavComponent,
    NotFoundComponent,
    LoginComponent,
    BusinessComponent,
    VideosComponent,
    VideoEditComponent,
    LoadingSpinnerComponent,
    MobileNavComponent,
    
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [ServerHandelerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);