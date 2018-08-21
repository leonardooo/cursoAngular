import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelciusComponent } from './celcius.component';

describe('CelciusComponent', () => {
  let component: CelciusComponent;
  let fixture: ComponentFixture<CelciusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelciusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelciusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
