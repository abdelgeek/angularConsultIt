import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
@Component({
  selector: 'app-home-test',
  templateUrl: './home-test.component.html',
  styleUrls: ['./home-test.component.scss']
})
export class HomeTestComponent implements OnInit {
  user: {};
  constructor(private loginService: LoginService) {

    this.loginService.authenticate(response => {
      this.user = response;
      this.message();
    });
  }

  ngOnInit() {
  }

}
