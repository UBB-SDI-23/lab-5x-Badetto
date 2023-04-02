import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { FootballTeam } from '../../models/footballteams.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    courseId: number = 0;
    footballTeam?: FootballTeam
    constructor(private apiSrv: ApiService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
          this.courseId = params['id'];
          this.apiSrv.getFootBallTeamAndPlayers(this.courseId).subscribe((data : FootballTeam) => {
            this.footballTeam = data;
          })
        })
    }
}
