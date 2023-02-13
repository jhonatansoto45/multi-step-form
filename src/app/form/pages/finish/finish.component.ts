import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralFormService } from 'src/app/service/general-form.service';
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

  ngOnDestroy(): void {}

  get sumAdditions(): string {
    return `${this.generalService.totalSumAdditions}`;
  }

  get additions() {
    return this.current.addtions;
  }

  back(): void {
    this.router.navigate(['/multi-step/add-ons']);
  }

  confirm(): void {}

  private getSumAdditions(): void {
    const pricePlan = this.current.plan?.price ?? 0;
    const price = this.current.addtions?.map((value) => value.price) ?? [];

    this.generalService.sumAdditions(pricePlan, price);
  }
}
