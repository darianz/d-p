import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeddingsComponent } from './weddings/weddings.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BusinessComponent } from './business/business.component';
import { YoutubeVideosComponent } from './youtube-videos/youtube-videos.component';
import { VimeoVideosComponent } from './vimeo-videos/vimeo-videos.component';
import { FacebookVideosComponent } from './facebook-videos/facebook-videos.component';
import { VideosComponent } from './videos/videos.component';

import { VideoEditComponent } from './video-edit/video-edit.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MobileNavComponent } from './header/mobile-nav/mobile-nav.component';
import { LoginGuard } from './login/login.guard';
import { ServerHandelerComponent } from './server-handeler/server-handeler.component';
import { ServerHandelerService } from './server-handeler.service';


const appRoutes: Routes = [
{path: 'home', component: HomeComponent },
{path: '', component: HomeComponent },
{path: 'login', component: LoginComponent},
{path: 'business', component: BusinessComponent},
{path: 'weddings', component: WeddingsComponent},
{path: 'video-edit', component: VideoEditComponent},
{path: 'video-view', component: ServerHandelerComponent},
// {path: 'video-edit', component: VideoEditComponent, canActivate: [LoginGuard]},
{path: 'not-found', component: NotFoundComponent},
{path: '**', redirectTo: '/not-found'}
];

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
    YoutubeVideosComponent,
    VimeoVideosComponent,
    FacebookVideosComponent,
    VideosComponent,
    VideoEditComponent,
    LoadingSpinnerComponent,
    MobileNavComponent,
    ServerHandelerComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxYoutubePlayerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerHandelerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);