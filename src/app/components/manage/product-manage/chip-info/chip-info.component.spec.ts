import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipInfoComponent } from './chip-info.component';

describe('ChipInfoComponent', () => {
  let component: ChipInfoComponent;
  let fixture: ComponentFixture<ChipInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
