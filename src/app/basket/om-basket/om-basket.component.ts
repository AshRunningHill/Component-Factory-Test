import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-om-basket',
  templateUrl: './om-basket.component.html',
  styleUrls: ['../basket.component.scss']
})
export class OmBasketComponent implements OnInit {

  constructor(public basketService: BasketService) { }

  ngOnInit(): void {
  }

}
