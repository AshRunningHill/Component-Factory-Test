import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  public addNumbers(a: number, b: number): number {
    return a + b;
  }
}
