import { Component, OnInit } from '@angular/core';

interface MenuItem {
  position: number;
  legend: string;
  name: string;
  route: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  listMenu: MenuItem[] = [
    {
      position: 1,
      legend: 'STEP 1',
      name: 'YOUR INFO',
      route: './multi-step/your-info',
    },
    {
      position: 2,
      legend: 'STEP 2',
      name: 'SELECT PLAN',
      route: './multi-step/select-plan',
    },
    {
      position: 3,
      legend: 'STEP 3',
      name: 'ADDS-ONS',
      route: './multi-step/add-ons',
    },
    {
      position: 4,
      legend: 'STEP 4',
      name: 'SUMMARY',
      route: './multi-step/summary',
    },
  ];
}
