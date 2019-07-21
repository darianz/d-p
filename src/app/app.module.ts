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

const appRoutes: Routes = [
{path: '', component: HomeComponent },
{path: 'home', component: HomeComponent },
{path: 'login', component: LoginComponent},
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
