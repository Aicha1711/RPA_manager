import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironnementdialogComponent } from './environnementdialog.component';

describe('EnvironnementdialogComponent', () => {
  let component: EnvironnementdialogComponent;
  let fixture: ComponentFixture<EnvironnementdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironnementdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironnementdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
