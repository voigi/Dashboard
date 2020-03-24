import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActricesComponent } from './actrices.component';

describe('ActricesComponent', () => {
  let component: ActricesComponent;
  let fixture: ComponentFixture<ActricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
