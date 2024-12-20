import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSuspendedComponent } from './home-suspended.component';

describe('HomeSuspendedComponent', () => {
  let component: HomeSuspendedComponent;
  let fixture: ComponentFixture<HomeSuspendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSuspendedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSuspendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
