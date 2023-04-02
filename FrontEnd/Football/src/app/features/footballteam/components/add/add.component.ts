import { Component } from '@angular/core';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { AddFootballTeamDto } from '../../models/footballteams.models';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  name: string = "";
  nickname: string = "";
  foundingYear: number = 0;
  value: number = 0;
  professionalStatus: string = "";
  constructor(private apiSvc: ApiService){}
  addFootballTeam(){
    if (this.name && this.nickname && this.professionalStatus){
      if (this.professionalStatus == "Professional" || this.professionalStatus == "Semi-Professional" || this.professionalStatus == "Amateur"){
        const footballTeam: AddFootballTeamDto = {
          name: this.name,
          nickname: this.nickname,
          foundingYear: this.foundingYear,
          value: this.value,
          professionalStatus: this.professionalStatus
        }
        this.apiSvc.addFootballTeam(footballTeam).subscribe();
        this.name="";
        this.nickname="";
        this.foundingYear=0;
        this.value=0;
        this.professionalStatus="";
      }
      else{
        alert("Professional Status must be either: Professional, Semi-Professional or Amateur")
      }
    }
    else{
      alert("All fields must be filled in")
    }
  }
}
