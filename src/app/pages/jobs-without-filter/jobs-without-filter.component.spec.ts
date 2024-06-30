import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsWithoutFilterComponent } from './jobs-without-filter.component';

describe('JobsWithoutFilterComponent', () => {
  let component: JobsWithoutFilterComponent;
  let fixture: ComponentFixture<JobsWithoutFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsWithoutFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsWithoutFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
