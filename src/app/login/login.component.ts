import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['carlos@gmail.com', [Validators.required]],
      password: ['12345', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  login() {
    console.log(this.form.value);
  }
}
