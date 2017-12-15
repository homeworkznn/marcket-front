import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConPayComponent } from './con-pay.component';

describe('ConPayComponent', () => {
  let component: ConPayComponent;
  let fixture: ComponentFixture<ConPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
