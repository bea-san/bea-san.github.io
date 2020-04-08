import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPromoComponent } from './products-promo.component';

describe('ProductsPromoComponent', () => {
  let component: ProductsPromoComponent;
  let fixture: ComponentFixture<ProductsPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
