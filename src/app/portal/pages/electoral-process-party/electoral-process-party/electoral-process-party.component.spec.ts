import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectoralProcessPartyComponent } from './electoral-process-party.component';

describe('ElectoralProcessPartyComponent', () => {
  let component: ElectoralProcessPartyComponent;
  let fixture: ComponentFixture<ElectoralProcessPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectoralProcessPartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectoralProcessPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
