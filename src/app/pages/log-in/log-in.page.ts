import { Component, OnInit } from '@angular/core';
import { setStorage, getStorage } from '../../../services/storage';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  constructor(private router: Router, private _apiService: ApiServiceService) { }

  ngOnInit() {
  }

  email;
  password;

  login(){
    console.log(this.email + " - " + this.password);

    var data = {
      "user": this.email,
      "hash_pwd": this.password
    }

    this._apiService.login(data).subscribe((res)=>{
      console.log(res);
      setStorage('email', this.email);
      this.router.navigate(['/private-area'])

    })

  }

  async getDataStorage(){
    this.email = await getStorage('email');
    console.log("---------->" + this.email);
  }

}
