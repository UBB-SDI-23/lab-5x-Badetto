import { Component, OnInit } from '@angular/core';
import { FootballTeam } from '../../models/footballteams.models';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { Router } from '@angular/router';
import { NrPlayers } from '../../models/nrplayers.models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  footballteams: FootballTeam[] = [];
  numberplayers: Number[] = [];

  constructor(private apiSvc: ApiService,
    private router: Router) {}
  ngOnInit(): void {
    this.apiSvc.getFootballTeams().subscribe((result: FootballTeam[]) => {
      for (let i = 0; i < result.length; i++) {
        this.footballteams.push(result[i]) 
        this.apiSvc.getNrPlayers(result[i].id).subscribe((result2: NrPlayers) =>{
          this.footballteams[i]["nrplayers"] = result2.nr_players
        })
      }
    });
  }
  goToDetails(courseId: number){
    this.router.navigateByUrl(`football-team/${courseId}`)
  }
  goToAdd(){
    this.router.navigateByUrl(`football-team/add`);
  }
  sortName(){
    this.footballteams.sort((a, b) => a.name.localeCompare(b.name))
  }
}