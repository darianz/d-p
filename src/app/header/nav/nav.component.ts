import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  isLogged = false;
  private userSub: Subscription;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
   this.userSub =  this.loginService.user.subscribe(user => {
    this.isLogged = !user ? false : true;
   });
  }

  onLogout(){
    this.loginService.logout();
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }


}
