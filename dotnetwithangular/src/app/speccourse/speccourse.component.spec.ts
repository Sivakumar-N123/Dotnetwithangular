import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeccourseComponent } from './speccourse.component';

describe('SpeccourseComponent', () => {
  let component: SpeccourseComponent;
  let fixture: ComponentFixture<SpeccourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeccourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeccourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
