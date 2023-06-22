import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ElectoralProcess } from 'src/app/services/electoralProcess.service';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {


  ESTADO_PROCESO: { [key: string]: string } = {
    '1': 'En Proceso',
    '2': 'Por Finalizar',
    '3': 'Finalizado',
    '4': 'Cancelado',
  }

  chart: any = '';
  listPoliticalParties:any[] = [];
  testSchoolId: number = 2;
  data: any;
  electoralProcessCountVotes: any[] = [];
  chartColors:any = [];
  countVotes: any[] = [];
  flagChart: boolean = false;
  constructor(private schoolService: SchoolService, 
    private electoralProcessService: ElectoralProcess,
    private datePipe: DatePipe){}

  ngOnInit(){
    Chart.register(...registerables);
    this.getElectoralProcessCountVotesBySchoolId(this.testSchoolId);
    //this.getChart();
  }

  labelsChart:any[] = [];
  dataChart:any[] = [];
  async createNewData(title: string){

    this.data = {
    labels: this.labelsChart,
    datasets: [{
      label: title,
      data: this.dataChart,
      backgroundColor: this.chartColors,
      borderColor: this.chartColors,
      borderWidth: 1
      }]
    };
  }

async getChart(){
  if(this.chart != ''){
    this.chart.destroy();
  }
  

  this.chart = await new Chart('canvas',{
    type: 'pie',
    data: this.data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }
  );
}

async generateChart(title: string){
  const phase1 = await this.generateRandomColors(this.countVotes.length);
  const phase2 = await this.createNewData(title);
  setTimeout(() => {this.getChart()},1500);
  this.flagChart = true;
}

async getPoliticPartiesBySchoolId() {
  //TODO la escuela id debe definirse
  await this.schoolService.getPoliticalParties(this.testSchoolId).subscribe({
    next: (response: any[]) => {
      this.listPoliticalParties = response;
    },
    error: (error: any) => {
      console.log('Error al obtener las politicas parties:', error);
    }
  });
}

getElectoralProcessCountVotesBySchoolId(schoolId:number){
  this.schoolService.getElectoralProcessCountVotesBySchoolId(schoolId).subscribe({
    next: (response: any[]) => {
      this.electoralProcessCountVotes = response.map(process => {
        const start_date = this.datePipe.transform(process.start_date,'dd/MM/yy, h:mm a');
        const end_date = this.datePipe.transform(process.end_date,'dd/MM/yy, h:mm a');
        const status = this.ESTADO_PROCESO[process.status.toString()] || 'Desconocido';
        return {
          id: process.id,
          title: process.title,
          start_date: start_date,
          end_date: end_date,
          status: status,
          votes: process.votes,
          schoolId: process.schoolId
        };
      });
    },
    error: (error: any) => {
      console.log('Error al obtener el conteo de votos de los procesos electorales:', error);
    }
  });
}

async getCountVotesByElectoralProcess(title: string, electoralId: number){
  await this.electoralProcessService.getPoliticalPartyParticipantVotesByElectoralProcessId(electoralId).subscribe({
    next: (response: any[]) => {
      this.countVotes = response;
      this.labelsChart = this.countVotes.map(vote => vote.master_political_party.name);
      this.dataChart = this.countVotes.map(vote => vote.votes+5);
      console.log(this.countVotes)
      console.log(this.labelsChart);
      console.log(this.dataChart);
      this.generateChart(title);
      
    },
    error: (error: any) => {
      console.log('Error al obtener el conteo de votos:', error);
    }
  });
}

  async generateRandomColors(length:number) {
  this.chartColors = [];
  
  for (let i = 0; i < length; i++) {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.chartColors.push(randomColor);
  }
  }

  

}
