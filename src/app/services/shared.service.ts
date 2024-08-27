import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private searchValue = new BehaviorSubject<string>('');
  currentSearch$ = this.searchValue.asObservable();
  constructor() { }

  getSearch(): string {
    return this.searchValue.getValue();
  }
  setSearch(newValue: string) {
    this.searchValue.next(newValue);
  }
}
