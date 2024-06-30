import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsGridTwoComponent } from './jobs-grid-two.component';

describe('JobsGridTwoComponent', () => {
  let component: JobsGridTwoComponent;
  let fixture: ComponentFixture<JobsGridTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsGridTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsGridTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
