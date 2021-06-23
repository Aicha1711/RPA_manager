import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironnementsComponent } from './environnements.component';

describe('EnvironnementsComponent', () => {
  let component: EnvironnementsComponent;
  let fixture: ComponentFixture<EnvironnementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironnementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironnementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
