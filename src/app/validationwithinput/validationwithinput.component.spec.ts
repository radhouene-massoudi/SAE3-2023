import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationwithinputComponent } from './validationwithinput.component';

describe('ValidationwithinputComponent', () => {
  let component: ValidationwithinputComponent;
  let fixture: ComponentFixture<ValidationwithinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationwithinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationwithinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
