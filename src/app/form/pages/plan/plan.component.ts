import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface CardItem {
  image: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  listCards: CardItem[] = [
    {
      image: '../../../../assets/images/icon-arcade.svg',
      name: 'Arcade',
      price: 9,
    },
    {
      image: '../../../../assets/images/icon-advanced.svg',
      name: 'Advanced',
      price: 12,
    },
    {
      image: '../../../../assets/images/icon-pro.svg',
      name: 'Pro',
      price: 15,
    },
  ];

  descuento: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  get strDescuento(): string {
    return !this.descuento ? 'mo' : 'yr';
  }

  selected(index: number): void {
    const cards = document.getElementsByClassName('plan__item');

    for (let i = 0; i < cards.length; i++) {
      const current = cards[i];
      if (
        !current.classList.contains('plan__item--selected') &&
        index === Number(current.id)
      ) {
        current.classList.add('plan__item--selected');
      } else {
        current.classList.remove('plan__item--selected');
      }
    }
  }

  back(): void {
    this.router.navigate(['/multi-step/your-info']);
  }

  next(): void {
    this.router.navigate(['/multi-step/add-ons']);
  }
}
