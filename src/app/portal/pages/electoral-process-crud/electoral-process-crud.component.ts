import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-electoral-process-crud',
  templateUrl: './electoral-process-crud.component.html',
  styleUrls: ['./electoral-process-crud.component.css']
})
export class ElectoralProcessCRUDComponent implements OnInit {
  electoralProcess: any[] = [];
  newElectoralProcess: any = {
    title:'',
    startDate:'',
    endDate:'',
    status:'',
    smartContractAddress:'',
  };
  school:School=new School();
  electoralProcessList:any[]=[];
  sessionSchool:any;

 
 

  constructor(private schoolService: SchoolService,
    private storageService:StorageService

  ) { }

  ngOnInit() {
    this.sessionSchool=this.storageService.getSchool();
    this.getSchoolById(this.sessionSchool.id);
    this.showElectoralProcessBySchool(this.sessionSchool.id);
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
          this.electoralProcessList=responseElectoralProcess;

        },
        error:error=>{
          console.log('Error al obtener electoral process by shcool:', error);
        }
      }
    )

  }
  showElectoralProcessBySchool(schoolId:number){
    this.getElectoralProcessBySchoolId(schoolId);
  
  }
  




  addElectoralProcesses() {

    const startDateLocal = new Date(this.newElectoralProcess.startDate);
    const endDateLocal = new Date(this.newElectoralProcess.endDate);
    // Convierte las fechas al formato ISO 8601
    const startDateISO = startDateLocal.toISOString();
    const endDateISO = endDateLocal.toISOString();

    this.electoralProcess.push({
      title:this.newElectoralProcess.title,
      start_date: startDateISO,
      end_date: endDateISO,
      status:parseInt(this.newElectoralProcess.status),
      schoolId:this.school.id
    });
    console.log("electoralProcess",this.electoralProcess[0]);
    if(this.school.id!=0){
      this.schoolService.createElectoralProcesses(this.electoralProcess[0],this.school.id).subscribe(
        {
          next:(responseElectoralProcess:any)=>{
            console.log('Respuesta de createEelctoralProcess:', responseElectoralProcess);
            this.showElectoralProcessBySchool(this.school.id);

          },
          error:(error:any)=>{
            console.log('error create electoral process',error);
          }
        });
    }
    
    
    
 
  }
  deleteProcess(index: number) {
      
  }
 


  
}
