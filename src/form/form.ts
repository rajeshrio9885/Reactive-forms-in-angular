import { CommonModule } from '@angular/common';
import { Component, effect } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  form = new FormGroup({
    name : new FormControl('',Validators.required),
    age  : new FormControl('',[Validators.min(1),Validators.required]),
    RollNo : new FormControl('',[Validators.required])
  })

  onSubmit(){
    this.form.reset();
  }
}
