import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerGridComponent } from './freelancer-grid.component';

import { StoreModule } from '@ngrx/store';

describe('FreelancerGridComponent', () => {
  let component: FreelancerGridComponent;
  let fixture: ComponentFixture<FreelancerGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerGridComponent ],
      imports: [
        StoreModule.provideStore({})
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
