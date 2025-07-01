import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopHeader } from './desktop-header';

describe('DesktopHeader', () => {
  let component: DesktopHeader;
  let fixture: ComponentFixture<DesktopHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
