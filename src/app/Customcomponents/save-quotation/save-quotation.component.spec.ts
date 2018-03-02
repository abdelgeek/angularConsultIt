import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveQuotationComponent } from './save-quotation.component';

describe('SaveQuotationComponent', () => {
  let component: SaveQuotationComponent;
  let fixture: ComponentFixture<SaveQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
