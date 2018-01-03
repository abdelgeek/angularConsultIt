import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteStep5Component } from './quote-step5.component';

describe('QuoteStep5Component', () => {
  let component: QuoteStep5Component;
  let fixture: ComponentFixture<QuoteStep5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteStep5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
