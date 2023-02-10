import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GeneralFormService } from 'src/app/service/general-form.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit, OnDestroy {
  picksSeleted: Subscription = new Subscription();

  constructor(private generalService: GeneralFormService, private router: Router) {}

  ngOnInit(): void {
    this.picksSeleted = this.generalService.picksSelected$.subscribe(
      (checks) => {
        console.log(checks);
      }
    );
  }

  ngOnDestroy(): void {
    this.picksSeleted.unsubscribe();
  }

  back(): void {
    this.router.navigate(['/multi-step/add-ons'])
  }

  confirm(): void {}
}
