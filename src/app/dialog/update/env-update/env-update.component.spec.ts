import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvUpdateComponent } from './env-update.component';

describe('EnvUpdateComponent', () => {
  let component: EnvUpdateComponent;
  let fixture: ComponentFixture<EnvUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
