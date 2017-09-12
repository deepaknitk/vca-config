import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDidComponent } from './user-did.component';

describe('UserDidComponent', () => {
  let component: UserDidComponent;
  let fixture: ComponentFixture<UserDidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
