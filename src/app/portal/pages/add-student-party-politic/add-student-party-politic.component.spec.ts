import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentPartyPoliticComponent } from './add-student-party-politic.component';

describe('AddStudentPartyPoliticComponent', () => {
  let component: AddStudentPartyPoliticComponent;
  let fixture: ComponentFixture<AddStudentPartyPoliticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentPartyPoliticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentPartyPoliticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
