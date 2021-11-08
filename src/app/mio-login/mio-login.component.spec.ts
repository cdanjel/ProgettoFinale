import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MioLoginComponent } from './mio-login.component';

describe('MioLoginComponent', () => {
  let component: MioLoginComponent;
  let fixture: ComponentFixture<MioLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MioLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
