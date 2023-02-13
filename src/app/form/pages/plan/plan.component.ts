import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralFormService } from '../../../service/general-form.service';
import { CardItem, DataComplete } from '../../interface/form.interface';

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
  hasSelected: boolean = false;
  current!: DataComplete;

  itemSelected: CardItem = {
    image: '',
    name: '',
    price: 0,
  };

  constructor(
    private generalService: GeneralFormService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.generalService.loadSessionStorage())
      this.current = this.generalService.loadSessionStorage();
    else this.router.navigate(['/multi-step/your-info']);
  }

  get strDescuento(): string {
    return !this.descuento ? 'mo' : 'yr';
  }

  selected(index: number, item: CardItem): void {
    const cards = document.getElementsByClassName('plan__item');

    for (let i = 0; i < cards.length; i++) {
      const current = cards[i];
      if (
        Number(current.id) === index &&
        !current.classList.contains('plan__item--selected')
      ) {
        this.hasSelected = true;
        current.classList.add('plan__item--selected');
        this.itemSelected = item;
      } else if (
        current.classList.contains('plan__item--selected') &&
        Number(current.id) === index
      ) {
        this.hasSelected = false;
        current.classList.remove('plan__item--selected');
      } else {
        this.hasSelected = false;
        current.classList.remove('plan__item--selected');
      }
    }
  }

  back(): void {
    this.router.navigate(['/multi-step/your-info']);
  }

  next(): void {
    const { name, price } = this.itemSelected;
    this.generalService.saveSessionStorage({
      ...this.current,
      plan: { name, price, type: !this.descuento ? 'mo' : 'yr' },
    });
    this.router.navigate(['/multi-step/add-ons']);
  }
}
