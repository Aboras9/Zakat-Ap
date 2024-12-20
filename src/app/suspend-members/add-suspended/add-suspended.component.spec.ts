import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuspendedComponent } from './add-suspended.component';

describe('AddSuspendedComponent', () => {
  let component: AddSuspendedComponent;
  let fixture: ComponentFixture<AddSuspendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSuspendedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSuspendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
