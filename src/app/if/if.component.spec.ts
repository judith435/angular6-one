import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IFComponent } from './if.component';

describe('IFComponent', () => {
  let component: IFComponent;
  let fixture: ComponentFixture<IFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
