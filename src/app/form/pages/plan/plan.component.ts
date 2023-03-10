import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { GeneralFormService } from '../../../service/general-form.service';
import { CardItem, DataComplete } from '../../interface/form.interface';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent {
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
  ) {
    if (generalService.loadSessionStorage())
      this.current = generalService.loadSessionStorage();
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
        this.itemSelected = item;
        current.classList.add('plan__item--selected');
      } else if (
        current.classList.contains('plan__item--selected') &&
        Number(current.id) === index
      ) {
        this.hasSelected = false;
        this.resetModel();
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
    if (this.itemSelected.image === '' && this.itemSelected.name === '') {
      this.openPopupError();
      return;
    }

    const { name, price } = this.itemSelected;
    this.generalService.saveSessionStorage({
      ...this.current,
      plan: {
        name,
        price: !this.descuento ? price : Number(`${price}0`),
        type: !this.descuento ? 'mo' : 'yr',
      },
    });

    this.router.navigate(['/multi-step/add-ons']);
  }

  //* UTILS
  openPopupError(): void {
    Swal.fire({
      title: 'Error!',
      text: 'Debes escoger un plan!',
      icon: 'error',
    });
  }

  resetModel(): void {
    this.itemSelected = {
      image: '',
      name: '',
      price: 0,
    };
  }
}
