import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringHelp } from './catering-help';

describe('CateringHelp', () => {
  let component: CateringHelp;
  let fixture: ComponentFixture<CateringHelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CateringHelp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CateringHelp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
