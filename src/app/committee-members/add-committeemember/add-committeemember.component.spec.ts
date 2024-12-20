import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommitteememberComponent } from './add-committeemember.component';

describe('AddCommitteememberComponent', () => {
  let component: AddCommitteememberComponent;
  let fixture: ComponentFixture<AddCommitteememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCommitteememberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCommitteememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
