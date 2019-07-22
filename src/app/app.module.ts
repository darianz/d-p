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

const appRoutes: Routes = [
{path: '', component: HomeComponent },
{path: 'home', component: HomeComponent },
{path: 'login', component: LoginComponent},
{path: 'business', component: BusinessComponent},
{path: 'weddings', component: WeddingsComponent},
{path: 'not-found', component: NotFoundComponent},
{path: '**', redirectTo: '/not-found'},
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
    FacebookVideosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxYoutubePlayerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);