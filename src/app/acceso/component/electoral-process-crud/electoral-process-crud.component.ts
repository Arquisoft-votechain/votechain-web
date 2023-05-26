import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electoral-process-crud',
  templateUrl: './electoral-process-crud.component.html',
  styleUrls: ['./electoral-process-crud.component.css']
})
export class ElectoralProcessCRUDComponent implements OnInit {
  processes: any[] = [];
  newProcess: any = {};

  parties: any[] = [
    { id: 1, name: 'Partido 1' },
    { id: 2, name: 'Partido 2' },
    { id: 3, name: 'Partido 3' }
  ];

  students: any[] = [
    { id: 1, name: 'Estudiante 1' },
    { id: 2, name: 'Estudiante 2' },
    { id: 3, name: 'Estudiante 3' }
  ];

  constructor() { }

  ngOnInit() {
  }

  addProcess() {
    this.processes.push(this.newProcess);
    this.newProcess = {};
  }

  deleteProcess(index: number) {
    this.processes.splice(index, 1);
  }

  getStudentName(studentId: number): string {
    const student = this.students.find(student => student.id === studentId);
    return student ? student.name : '';
  }
  getPartyName(partyId: number): string {
    const party = this.parties.find(party => party.id === partyId);
    return party ? party.name : '';
  }
  
}
