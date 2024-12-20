import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConstantComponent } from './home-constant.component';

describe('HomeConstantComponent', () => {
  let component: HomeConstantComponent;
  let fixture: ComponentFixture<HomeConstantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeConstantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeConstantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
