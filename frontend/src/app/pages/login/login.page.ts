import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPageComponent {

  username: string;
  password: string;
  loginProcess = false;

  errorUnkown = false;
  errorInvalid = false;

  constructor(public router: Router, public route: ActivatedRoute, private service: LoginService) { }

  login() {
    this.loginProcess = true;
    this.service.login(this.username, this.password)
      .finally(() => {
        this.loginProcess = false;
        setTimeout(() => {
          this.errorInvalid = false;
          this.errorUnkown = false;
        }, 2000);
      })
      .subscribe(x => {
        if (x.success) {
          this.router.navigate(['words'], { relativeTo: this.route });
        } else {
          this.errorInvalid = true;
        }
      }, err => {
        console.log(err);
        this.errorUnkown = true;
      });
  }

}
