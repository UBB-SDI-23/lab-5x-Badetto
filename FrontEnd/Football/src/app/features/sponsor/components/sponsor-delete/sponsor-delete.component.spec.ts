import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorDeleteComponent } from './sponsor-delete.component';

describe('SponsorDeleteComponent', () => {
  let component: SponsorDeleteComponent;
  let fixture: ComponentFixture<SponsorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
