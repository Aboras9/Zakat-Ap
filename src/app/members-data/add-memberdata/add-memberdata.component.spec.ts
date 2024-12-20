import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberdataComponent } from './add-memberdata.component';

describe('AddMemberdataComponent', () => {
  let component: AddMemberdataComponent;
  let fixture: ComponentFixture<AddMemberdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMemberdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMemberdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
