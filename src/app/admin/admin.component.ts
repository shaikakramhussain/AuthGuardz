import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private authService: AuthService,
     private router: Router) {
      history.pushState(null, null, location.href);
      window.onpopstate = function () {
          history.go(1);
      };
      }
  ngOnInit() {
  }
  logout(){
    alert('Loggedout Successfully');
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}