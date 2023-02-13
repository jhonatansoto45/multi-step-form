import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralFormService } from 'src/app/service/general-form.service';

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private generalService: GeneralFormService
  ) {}

  ngOnInit(): void {}

  fieldInvalid(field: string): boolean | null | undefined {
    return this.myForm.get(field)?.errors && this.myForm.get(field)?.touched;
  }

  saveForm(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const name = this.myForm.get('name')?.value;
    const email = this.myForm.get('email')?.value;
    const phone = this.myForm.get('phone')?.value;

    const data = {
      user: { name: name, email: email, phone: phone },
    };

    this.generalService.saveSessionStorage(data);

    this.router.navigate(['/multi-step/select-plan']);
  }
}
