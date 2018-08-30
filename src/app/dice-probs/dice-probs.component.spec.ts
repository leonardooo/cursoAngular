import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceProbsComponent } from './dice-probs.component';

describe('DiceProbsComponent', () => {
  let component: DiceProbsComponent;
  let fixture: ComponentFixture<DiceProbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceProbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceProbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
