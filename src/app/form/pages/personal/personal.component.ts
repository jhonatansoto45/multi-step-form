import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  fieldInvalid(field: string): boolean | null | undefined {
    return this.myForm.get(field)?.errors && this.myForm.get(field)?.touched;
  }

  saveForm(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  }
}