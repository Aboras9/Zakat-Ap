import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConstantComponent } from './add-constant.component';

describe('AddConstantComponent', () => {
  let component: AddConstantComponent;
  let fixture: ComponentFixture<AddConstantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddConstantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddConstantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
