import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CheckItem } from '../form/interface/form.interface';

@Injectable({
  providedIn: 'root',
})
export class GeneralFormService {
  picksSelected$: Subject<CheckItem[]> = new Subject<CheckItem[]>();

  constructor() {}
}
