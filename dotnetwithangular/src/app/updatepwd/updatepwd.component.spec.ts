import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepwdComponent } from './updatepwd.component';

describe('UpdatepwdComponent', () => {
  let component: UpdatepwdComponent;
  let fixture: ComponentFixture<UpdatepwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
