import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageexchangelistComponent } from './manageexchangelist.component';

describe('ManageexchangelistComponent', () => {
  let component: ManageexchangelistComponent;
  let fixture: ComponentFixture<ManageexchangelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageexchangelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageexchangelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
