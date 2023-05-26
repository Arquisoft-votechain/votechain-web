import { Component } from '@angular/core';
import { Party } from 'src/app/models/party.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-politic-party',
  templateUrl: './politic-party.component.html',
  styleUrls: ['./politic-party.component.css']
})
export class PoliticPartyComponent {
  party: Party = new Party('','') // Crea una instancia de tu modelo de datos para el partido político

  saveParty() {
    // Lógica para guardar el partido político
    // Aquí puedes implementar la llamada a un servicio o hacer las operaciones necesarias para guardar los datos
    console.log('Partido político guardado:', this.party);
  }

}
