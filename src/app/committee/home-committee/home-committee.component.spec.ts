import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCommitteeComponent } from './home-committee.component';

describe('HomeCommitteeComponent', () => {
  let component: HomeCommitteeComponent;
  let fixture: ComponentFixture<HomeCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCommitteeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
