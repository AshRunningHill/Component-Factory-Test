import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketService } from './basket.service';
import { BasketComponent, BasketDirective } from './basket.component';
import { IwBasketComponent } from './iw-basket/iw-basket.component';
import { NedBasketComponent } from './ned-basket/ned-basket.component';
import { OmBasketComponent } from './om-basket/om-basket.component';



@NgModule({
  declarations: [
    BasketComponent,
    IwBasketComponent,
    NedBasketComponent,
    OmBasketComponent,
    BasketDirective
  ],
  entryComponents: [
    BasketComponent,
    IwBasketComponent,
    NedBasketComponent,
    OmBasketComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BasketComponent,
    BasketDirective
  ],
  providers: [BasketService]
})
export class BasketModule { }
