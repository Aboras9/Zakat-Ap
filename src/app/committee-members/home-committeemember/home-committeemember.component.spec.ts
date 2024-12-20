import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCommitteememberComponent } from './home-committeemember.component';

describe('HomeCommitteememberComponent', () => {
  let component: HomeCommitteememberComponent;
  let fixture: ComponentFixture<HomeCommitteememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCommitteememberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCommitteememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
