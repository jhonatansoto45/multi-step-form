import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CheckItem, DataComplete } from '../form/interface/form.interface';

@Injectable({
  providedIn: 'root',
})
export class GeneralFormService {
  dataMain$: BehaviorSubject<DataComplete> = new BehaviorSubject<DataComplete>({
    user: { name: '', email: '', phone: 0 },
  });

  private readonly nameItem: string = 'order';

  totalSumAdditions: number = 0;

  constructor() {}

  //* SESSION STORAGE
  saveSessionStorage(object: DataComplete): void {
    this.dataMain$.next(object);
    sessionStorage.setItem(this.nameItem, JSON.stringify(object));
  }

  loadSessionStorage(): DataComplete {
    return JSON.parse(sessionStorage.getItem(this.nameItem)!);
  }

  removeSessionStorage(): void {
    sessionStorage.removeItem(this.nameItem);
  }

  //* UTILS

  sumAdditions(price: number, additions: number[]): void {
    this.totalSumAdditions = additions.reduce(
      (initial, current) => initial + current,
      price
    );
  }
}
