import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectoralProcessStudentComponent } from './electoral-process-student.component';

describe('ElectoralProcessStudentComponent', () => {
  let component: ElectoralProcessStudentComponent;
  let fixture: ComponentFixture<ElectoralProcessStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectoralProcessStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectoralProcessStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
