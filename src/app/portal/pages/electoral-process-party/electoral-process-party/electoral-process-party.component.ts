import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/models/school.model';
import { ElectoralProcess } from 'src/app/services/electoralProcess.service';
import { SchoolService } from 'src/app/services/school.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-electoral-process-party',
  templateUrl: './electoral-process-party.component.html',
  styleUrls: ['./electoral-process-party.component.css']
})
export class ElectoralProcessPartyComponent implements OnInit{
  
    





 
  electoralProcessjoinPoliticParty: any[] = [];
  school:School=new School();
  politicPartiesElectoralProcessTable: any[] = [];

  electoralProcessBySchool: any[]=[];
  politicPartiesBySchool: any[]=[];

  selectedElectoralProcess:number=0;
  selectedPoliticParty:number=0;



  sessionSchool:any;

 
 

  constructor(
    private schoolService: SchoolService,
    private electoralProcess:ElectoralProcess,
    private storageService:StorageService

  ) { }

  ngOnInit() {

    this.sessionSchool=this.storageService.getSchool();
    this.showLabelSchoolById(this.sessionSchool.id);
    this.showComboElectoralProcess(this.sessionSchool.id);
    this.showComboPoliticParties(this.sessionSchool.id);
  }
  showLabelSchoolById(schoolId:number){
    this.getSchoolById(schoolId);

  }
  getSchoolById(schoolId: number) {
    this.schoolService.getSchoolById(schoolId).subscribe({
      next: (response: any) => {
   
        this.school = response.resource;
        console.log(this.school,"este es objeto");
      },
      error: (error: any) => {
        console.log('Error al obtener la escuela:', error);
      }
    });
  }
  getElectoralProcessBySchoolId(schoolId:number){
    this.schoolService.getElectoralProcessBySchoolId(schoolId).subscribe(
      {
        next:responseElectoralProcess=>{
          console.log(responseElectoralProcess,"electoralProcess by School");
          this.electoralProcessBySchool=responseElectoralProcess;

        },
        error:error=>{
          console.log('Error al obtener electoral process by shcool:', error);
        }
      }
    )

  }
  getPoliticPartyBySchoolId(schoolId:number){
    this.schoolService.getPoliticalParties(schoolId).subscribe(
      {
        next:responsePoliticalParty=>{
          console.log(responsePoliticalParty,"politic Party by School");
          this.politicPartiesBySchool=responsePoliticalParty;

        },
        error:error=>{
          console.log('Error al obtener electoral process by shcool:', error);
        }
      }
    )

  }
  
  
  showComboElectoralProcess(schoolId:number){
    this.getElectoralProcessBySchoolId(schoolId);
  }
  showComboPoliticParties(schoolId:number){
    this.getPoliticPartyBySchoolId(schoolId);
  }

  addElectoralProcessStudentRelation() {

    const assignedDateLocal = new Date();

    const assignedDateISO = assignedDateLocal.toISOString();
    this.electoralProcessjoinPoliticParty.push({
   
      assigned_at: assignedDateISO,
   
    });

    
      this.electoralProcess.createElectoralProcessesPoliticPartyRelation(this.selectedPoliticParty, this.selectedElectoralProcess,this.electoralProcessjoinPoliticParty[0]).subscribe({
        next: (responseElectoralProcessPoliticPartyRelation: any) => {
          console.log('Respuesta:', responseElectoralProcessPoliticPartyRelation);
          this.showPoliticPartiesTableByElectoralProcessId();

        },
        error: (error: any) => {
          console.log('Error al crear el electoralStudentRelation:', error);
        }
      });
  
  }


  getPoliticPartiesByElectoralProcessId(electoralProcessId:number){
    this.electoralProcess.getPoliticalPartyParticipantByElectoralProcessId(electoralProcessId).subscribe({
      next:responsePoliticParties=>{
        console.log(responsePoliticParties,"studen by classroomId");
        this.politicPartiesElectoralProcessTable=responsePoliticParties.map(item=>item.master_political_party);
        console.log(this.politicPartiesElectoralProcessTable,"politicParties by ElectoralProcess");
   
      },
      error: error=>{
        console.log('Error al obtener politic parties de electoralProcessId:', error);

      }
      });


  }
  showPoliticPartiesTableByElectoralProcessId(){
    
    this.getPoliticPartiesByElectoralProcessId(this.selectedElectoralProcess);
    
    
  }
  
  
}
  
  
  

  
  





  




