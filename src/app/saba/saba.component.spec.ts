import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SabaComponent } from './saba.component';

describe('SabaComponent', () => {
  let component: SabaComponent;
  let fixture: ComponentFixture<SabaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
