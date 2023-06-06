import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectoralProcessCRUDComponent } from './electoral-process-crud.component';

describe('ElectoralProcessCRUDComponent', () => {
  let component: ElectoralProcessCRUDComponent;
  let fixture: ComponentFixture<ElectoralProcessCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectoralProcessCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectoralProcessCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
