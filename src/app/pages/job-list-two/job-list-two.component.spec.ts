import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListTwoComponent } from './job-list-two.component';

describe('JobListTwoComponent', () => {
  let component: JobListTwoComponent;
  let fixture: ComponentFixture<JobListTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
