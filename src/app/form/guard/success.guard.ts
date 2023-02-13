import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GeneralFormService } from '../../service/general-form.service';

@Injectable({
  providedIn: 'root',
})
export class SuccessGuard implements CanActivate {
  constructor(
    private generalService: GeneralFormService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (!this.generalService.acceptPayment) {
      this.router.navigate(['/multi-step/your-info']);
      return false;
    }

    return this.generalService.acceptPayment;
  }
}
