import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MioHeaderComponent } from './mio-header.component';

describe('MioHeaderComponent', () => {
  let component: MioHeaderComponent;
  let fixture: ComponentFixture<MioHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MioHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
