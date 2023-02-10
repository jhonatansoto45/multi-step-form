import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralFormService } from 'src/app/service/general-form.service';
import { CheckItem } from '../../interface/form.interface';

@Component({
  selector: 'app-pick',
  templateUrl: './pick.component.html',
  styleUrls: ['./pick.component.scss'],
})
export class PickComponent implements OnInit {
  listChecks: CheckItem[] = [
    {
      checked: true,
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: '+$1',
    },
    {
      checked: true,
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '+$2',
    },
    {
      checked: false,
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: '+$2',
    },
  ];

  plan: string = 'mo';

  constructor(
    private router: Router,
    private generalService: GeneralFormService
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('plan')!) {
      this.plan = sessionStorage.getItem('plan')!;
    }
  }

  typePrice(item: string): string {
    return this.plan === 'yr' ? `${item}0/` : `${item}/`;
  }

  changeCheck(index: number): void {
    this.listChecks[index].checked = !this.listChecks[index].checked;
  }

  back(): void {
    this.router.navigate(['/multi-step/select-plan']);
  }

  next(): void {
    const checkeds = this.listChecks.filter((check) => check.checked);
    this.generalService.picksSelected$.next(checkeds);
    console.log(checkeds);


    this.router.navigate(['/multi-step/summary']);
  }
}
