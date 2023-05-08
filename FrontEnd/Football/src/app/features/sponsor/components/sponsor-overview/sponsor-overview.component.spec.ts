import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorOverviewComponent } from './sponsor-overview.component';

describe('SponsorOverviewComponent', () => {
  let component: SponsorOverviewComponent;
  let fixture: ComponentFixture<SponsorOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
