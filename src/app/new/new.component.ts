import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})

export class NewComponent implements OnInit {

  form: FormGroup;
  maxLength: number = 20;

  constructor(
    private appService: AppService,
    private router: Router
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(this.maxLength)]),
      email: new FormControl('', [Validators.email])
    });
  }

  onSubmit() {
    this.appService.addUser(this.form.get('name').value, this.form.get('email').value);
    this.form.reset();
    this.router.navigate(['/settings']);
  }

}
