import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MioFooterComponent } from './mio-footer.component';

describe('MioFooterComponent', () => {
  let component: MioFooterComponent;
  let fixture: ComponentFixture<MioFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MioFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MioFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
