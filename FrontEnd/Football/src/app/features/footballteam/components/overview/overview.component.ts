import { Component, OnInit } from '@angular/core';
import { FootballTeam } from '../../models/footballteams.models';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  footballteams: FootballTeam[] = [];

  constructor(private apiSvc: ApiService,
    private router: Router) {}
  ngOnInit(): void {
    this.apiSvc.getFootballTeams().subscribe((result: FootballTeam[]) => {
      this.footballteams = result;
    });
  }

  goToDetails(courseId: number){
    this.router.navigateByUrl(`football-team/${courseId}`)
  }
}