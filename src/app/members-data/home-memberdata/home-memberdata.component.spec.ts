import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMemberdataComponent } from './home-memberdata.component';

describe('HomeMemberdataComponent', () => {
  let component: HomeMemberdataComponent;
  let fixture: ComponentFixture<HomeMemberdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMemberdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMemberdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
