import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotsdialogComponent } from './robotsdialog.component';

describe('RobotsdialogComponent', () => {
  let component: RobotsdialogComponent;
  let fixture: ComponentFixture<RobotsdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotsdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
