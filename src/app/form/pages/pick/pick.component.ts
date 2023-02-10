import { Component, OnInit } from '@angular/core';

interface CheckItem {
  checked: boolean;
  title: string;
  description: string;
  price: string;
}
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
      price: '+1/mo',
    },
    {
      checked: true,
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '+2/mo',
    },
    {
      checked: false,
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: '+2/mo',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  changeCheck(index: number): void {
    this.listChecks[index].checked = !this.listChecks[index].checked;
  }

  back(): void {}

  next(): void {}
}
