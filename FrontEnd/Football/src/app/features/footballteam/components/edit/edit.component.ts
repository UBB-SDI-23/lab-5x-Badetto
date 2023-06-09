import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { EditFootballTeamDto, FootballTeam } from '../../models/footballteams.models';
import { ActivatedRoute, Router } from '@angular/router';
import { EditPlayerDto, Player } from '../../models/players.models';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  footballTeamID: number = 0;
  name: string = "";
  nickname: string = "";
  foundingYear: number = 0;
  value: number = 0;
  professionalStatus: string = "";
  content: EditPlayerDto[] = [];
  
  constructor(private apiSrv: ApiService, private activatedRoute: ActivatedRoute, private router: Router ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.footballTeamID = params['id'];
      this.apiSrv.getFootBallTeamAndPlayers(this.footballTeamID).subscribe((data : FootballTeam) => {
        this.name = data.name;
        this.nickname = data.nickname;
        this.foundingYear = data.foundingYear;
        this.value = data.value;
        this.professionalStatus = data.professionalStatus;
      })
    })
  }
  editFootballTeam(){
    if (this.name && this.nickname && this.professionalStatus){
      if (this.professionalStatus == "Professional" || this.professionalStatus == "Semi-Professional" || this.professionalStatus == "Amateur"){
        const footballTeam: EditFootballTeamDto = {
          name: this.name,
          nickname: this.nickname,
          foundingYear: this.foundingYear,
          value: this.value,
          professionalStatus: this.professionalStatus,
          content: this.content
        }
        alert("Team was updated succesfully!")
        this.apiSrv.editFootballTeam(this.footballTeamID, footballTeam).subscribe(result => console.log(result));
        this.name= footballTeam.name;
        this.nickname=footballTeam.nickname;
        this.foundingYear=footballTeam.foundingYear;
        this.value=footballTeam.value;
        this.professionalStatus=footballTeam.professionalStatus;
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
