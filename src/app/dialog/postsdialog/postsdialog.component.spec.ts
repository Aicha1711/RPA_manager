import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsdialogComponent } from './postsdialog.component';

describe('PostsdialogComponent', () => {
  let component: PostsdialogComponent;
  let fixture: ComponentFixture<PostsdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
