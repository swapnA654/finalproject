import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlandingpageComponent } from './adminlandingpage.component';

describe('AdminlandingpageComponent', () => {
  let component: AdminlandingpageComponent;
  let fixture: ComponentFixture<AdminlandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
