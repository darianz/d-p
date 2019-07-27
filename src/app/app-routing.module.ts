import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BusinessComponent } from './pages/business/business.component';
import { WeddingsComponent } from './pages/weddings/weddings.component';
import { VideoEditComponent } from './pages/video-edit/video-edit.component';
import { ServerHandelerComponent } from './server-handeler/server-handeler.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
