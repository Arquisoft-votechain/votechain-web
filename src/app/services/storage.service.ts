import { Injectable } from '@angular/core';
import { SchoolService } from './school.service';
import { AdministratorsService } from './administrators.service';

@Injectable()
export class StorageService {
  School: any = [];
  administrator:any =[];
  resource:any;

  constructor(private schoolService: SchoolService,
              private administratorsService:AdministratorsService
              ) { }

  saveValueSchool(schoolId: number) {
    this.schoolService.getSchoolById(schoolId).subscribe({
      next: (response: any) => {
          this.School=response.resource;
          sessionStorage.setItem('School', JSON.stringify(this.School));

      
      },
      error: (error: any) => {
        console.log('Error al obtener la escuela:', error);
      }
    });
    
  }

  SaveAdministratorAndSchool(userId:number){
    this.administratorsService.getAdministratorByUserId(userId).subscribe({
      next:(responseAdministrator:any)=>{
      
        this.administrator=responseAdministrator.resource;
        sessionStorage.setItem('Administrator',JSON.stringify(this.administrator));
        this.saveValueSchool(this.administrator.schoolId);

      },
      error: (error:any)=>{
        console.log('Error al obtener Administrator by userId:', error);

      }
      });
      
  }

  getSchool() {
    const objetoString = sessionStorage.getItem('School');
    const objeto = JSON.parse(objetoString as string);
    return objeto;
  }
  getAdministrator() {
    const objetoString = sessionStorage.getItem('Administrator');
    const objeto = JSON.parse(objetoString as string);
    return objeto;
  }
  clearStorage() {
    sessionStorage.clear();
  }


}
