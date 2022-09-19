import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasketModule } from './basket/basket.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BasketModule
  ],
  providers: [            
    {
    provide: 'env',
    useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
