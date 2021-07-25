import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterobotComponent } from './deleterobot.component';

describe('DeleterobotComponent', () => {
  let component: DeleterobotComponent;
  let fixture: ComponentFixture<DeleterobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleterobotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleterobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
