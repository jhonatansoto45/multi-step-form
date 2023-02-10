import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CheckItem, DataComplete } from '../form/interface/form.interface';

@Injectable({
  providedIn: 'root',
})
export class GeneralFormService {
  picksSelected$: Subject<CheckItem[]> = new Subject<CheckItem[]>();
  dataMain$: Subject<DataComplete> = new Subject<DataComplete>();

  constructor() {}
}
