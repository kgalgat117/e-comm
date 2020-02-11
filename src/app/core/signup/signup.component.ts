import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import validator from 'validator';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: any = {
    email: '',
    address: {},
    company: {
      address: {}
    }
  }

  process: string = 'inactive'

  errorCodes: Array<number> = []

  constructor(private router: Router, private userService: UserService, private cookieService: CookieService) { }

  CreateUser() {
    if (this.validateData()) {
      this.process = 'active'
      this.userService.userSignUp(this.user).subscribe(response => {
        console.log(response)
        // this.signin()
      }, err => {
        this.process = 'inactive'
        if (err && err.error && err.error.code && err.error.code == 11000) {
          this.errorCodes.push(11000)
        }
        console.log(err)
      })
    }
  }

  emailChanged() {
    this.errorCodes.splice(this.errorCodes.indexOf(11000), 1)
  }

  validateData() {
    if (validator.isEmail(this.user.email) && this.user.firstName && this.user.password && this.user.cpassword && (this.user.password == this.user.cpassword) && validator.isMobilePhone(this.user.phone, 'en-IN')) {
      return true
    }
    return false
  }

  ngOnInit() {
  }

}
