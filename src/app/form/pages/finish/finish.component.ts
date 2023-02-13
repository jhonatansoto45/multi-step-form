import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { GeneralFormService } from '../../../service/general-form.service';
import { DataComplete } from '../../interface/form.interface';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit, OnDestroy {
  current!: DataComplete;

  constructor(
    private generalService: GeneralFormService,
    private router: Router
  ) {
    if (generalService.loadSessionStorage())
      this.current = generalService.loadSessionStorage();
    else this.router.navigate(['/multi-step/your-info']);
  }

  ngOnInit(): void {
    this.getSumAdditions();
  }

  ngOnDestroy(): void {
    this.generalService.acceptPayment = false;
  }

  get sumAdditions(): string {
    return `${this.generalService.totalSumAdditions}`;
  }

  get additions() {
    return this.current.addtions;
  }

  back(): void {
    this.router.navigate(['/multi-step/add-ons']);
  }

  confirm(): void {
    this.generalService.acceptPayment = true;
    this.router.navigate(['/multi-step/success']);
  }

  private getSumAdditions(): void {
    const pricePlan = this.current.plan?.price ?? 0;
    const price = this.current.addtions?.map((value) => value.price) ?? [];

    this.generalService.sumAdditions(pricePlan, price);
  }

  resetPlanConfirm(): void {
    Swal.fire({
      title: 'Esta seguro que desea cambir el plan?',
      showDenyButton: true,
      confirmButtonText: 'Si',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/multi-step/select-plan']);
      } else if (result.isDenied) {
        Swal.fire('Ningún cambio realizado.', '', 'info');
      }
    });
  }
}
