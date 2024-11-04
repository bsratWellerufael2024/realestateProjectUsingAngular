import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveListingsComponent } from './approve-listings.component';

describe('ApproveListingsComponent', () => {
  let component: ApproveListingsComponent;
  let fixture: ComponentFixture<ApproveListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveListingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
