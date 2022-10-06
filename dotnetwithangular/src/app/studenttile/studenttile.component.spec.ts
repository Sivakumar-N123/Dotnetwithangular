import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttileComponent } from './studenttile.component';

describe('StudenttileComponent', () => {
  let component: StudenttileComponent;
  let fixture: ComponentFixture<StudenttileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenttileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenttileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
