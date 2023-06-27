import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-politic-party',
  templateUrl: './politic-party.component.html',
  styleUrls: ['./politic-party.component.scss']
})
export class PoliticPartyComponent implements OnInit {
  listPoliticParties: any[] = [];
  listaPropuestas: String[] = [];
  propuesta: String = "";
  sessionSchool:any;

  politicParty: any = {
    name: '',
    description: '',
    proposes: []
  };

  selectedPoliticParty: any = {
    name: '',
    description: '',
    proposes: []
  };
  constructor(private schoolService: SchoolService, private storageService:StorageService) { }

  ngOnInit() {
    this.getPoliticParties();
  }

  getPoliticParties() {
    this.sessionSchool=this.storageService.getSchool();
    //TODO la escuela id debe definirse
    this.schoolService.getPoliticalParties(this.sessionSchool.id).subscribe({
      next: (response: any[]) => {
        this.listPoliticParties = response;
      },
      error: (error: any) => {
        console.log('Error al obtener las politicas parties:', error);
      }
    });
  }

  addPropuestas(propuesta: String): void {
    if(propuesta != '') {
      this.listaPropuestas.push(propuesta);
    }
    this.propuesta = '';
  }

  deletePropuesta(propuesta: String): void {
    const index = this.listaPropuestas.indexOf(propuesta);
    if (index >= 0) {
      this.listaPropuestas.splice(index, 1);
    }
  }

  postPoliticParty() {
    this.politicParty.proposes = this.listaPropuestas;
    this.schoolService.postPoliticalParties(this.sessionSchool.id, this.politicParty).subscribe({
      next: (response: any[]) => {
        console.log("respuesta " + response.toString());
      },
      error: (error: any) => {
        console.log('Error al crear un politic party:', error);
      }
    });
    this.getPoliticParties();
  }

  selectPartido(partido: any) {
    this.selectedPoliticParty = partido;
  }
  
}
