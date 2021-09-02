import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsdialogComponent } from './jobsdialog.component';

describe('JobsdialogComponent', () => {
  let component: JobsdialogComponent;
  let fixture: ComponentFixture<JobsdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
