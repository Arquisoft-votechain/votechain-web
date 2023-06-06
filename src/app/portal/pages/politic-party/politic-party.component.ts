import { Component } from '@angular/core';
import { Party } from 'src/app/models/party.model';

@Component({
  selector: 'app-politic-party',
  templateUrl: './politic-party.component.html',
  styleUrls: ['./politic-party.component.scss']
})
export class PoliticPartyComponent {
  parties: Party[] = [];
  party: Party = new Party('', '', [], []); // Asegúrate de proporcionar los argumentos necesarios

  memberName: string = '';
  memberDNI: string = '';

  saveParty() {
    // Lógica para guardar el partido político
    // Aquí puedes implementar la llamada a un servicio o hacer las operaciones necesarias para guardar los datos
    console.log('Partido político guardado:', this.party);
  }

  addMember() {
    if (this.memberName && this.memberDNI) {
      const newMember = { name: this.memberName, dni: this.memberDNI };
      this.party.members.push(newMember);
      this.memberName = '';
      this.memberDNI = '';
    }
  }

  deleteMember(member: { name: string; dni: string }) {
    const index = this.party.members.indexOf(member);
    if (index !== -1) {
      this.party.members.splice(index, 1);
    }
  }
}
