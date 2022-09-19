import { Component, ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, Inject, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { IwBasketComponent } from './iw-basket/iw-basket.component';
import { NedBasketComponent } from './ned-basket/ned-basket.component';
import { OmBasketComponent } from './om-basket/om-basket.component';

@Directive({ selector: '[suiNgComponent]' })
export class BasketDirective {
    constructor(public readonly viewContainerRef: ViewContainerRef) {}
}

type componentList = {
  [key: string]: any
}

@Component({
  selector: 'app-basket',
  template: '<ng-container suiNgComponent></ng-container>',
})
export class BasketComponent implements OnInit {
  @Output() readonly stateChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() readonly output: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(BasketDirective, { static: true })
  componentHost!: BasketDirective;

  public static COMPONENT_LIST: componentList = {
    iw: IwBasketComponent,
    ned: NedBasketComponent,
    om: OmBasketComponent
  };

  companyCode: string;
  componentRef: ComponentRef<any> | null = null;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver, @Inject('env') private currentEnvironment: any) { 
    this.companyCode = currentEnvironment ? currentEnvironment.companyCode : 'iw';
  }

  ngOnInit(): void {
    this.loadComponent();
  }

  ngOnDestroy(): void {
    this.componentHost.viewContainerRef.clear();
    if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
    }
}

  loadComponent(): void {
    const dynamicComponent = BasketComponent.COMPONENT_LIST[this.companyCode as keyof componentList];
    if (!dynamicComponent) {
        throw new Error(`Could not load component for sectionId: ${this.companyCode}`);
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(dynamicComponent);
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory, 0);
    this.componentRef.instance['stateChange'] = this.stateChange;
    // this.syncData();

    // this.stateChange.pipe(takeWhileAlive(this)).subscribe(data => this.output.emit(data));
}

}
