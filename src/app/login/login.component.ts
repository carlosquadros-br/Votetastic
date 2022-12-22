import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  title: String = `Votetastic`;

  constructor(private fb: FormBuilder, private auth: AuthService, private router : Router) {
    this.form = this.fb.group({
      email: ['carlos@gmail.com', [Validators.required]],
      password: ['123456', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  async login() {
    console.log(this.form.value);
    const {data ,error} = await this.auth.login(this.form.value);
    console.log(data.session);
    if (error) {
      console.log(error);
      return;
    }
    console.log(data.user);
    this.router.navigateByUrl('/app', {replaceUrl: true});
  }

  async register(){
    console.log(this.form.value);
    const {data ,error} = await this.auth.createAccount(this.form.value);
    console.log(data.session);
    if (error) {
      console.log(error);
      return;
    }
    console.log(data.user);
    this.router.navigateByUrl('/app', {replaceUrl: true});
  }
}
