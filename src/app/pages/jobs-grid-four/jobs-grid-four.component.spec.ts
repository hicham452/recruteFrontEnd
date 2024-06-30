import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsGridFourComponent } from './jobs-grid-four.component';

describe('JobsGridFourComponent', () => {
  let component: JobsGridFourComponent;
  let fixture: ComponentFixture<JobsGridFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsGridFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsGridFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
