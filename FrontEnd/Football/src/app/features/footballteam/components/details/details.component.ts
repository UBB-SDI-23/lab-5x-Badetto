import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { FootballTeam } from '../../models/footballteams.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    footballTeamID: number = 0;
    footballTeam?: FootballTeam
    constructor(private apiSrv: ApiService, private activatedRoute: ActivatedRoute, private router: Router ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
          this.footballTeamID = params['id'];
          this.apiSrv.getFootBallTeamAndPlayers(this.footballTeamID).subscribe((data : FootballTeam) => {
            this.footballTeam = data;
          })
        })
    }
    goToEdit(footballTeamID: number){
      this.router.navigateByUrl(`football-team/edit/${this.footballTeamID}`);
    }
    goToDelete(footballTeamID: number){
      this.router.navigateByUrl(`football-team/delete/${this.footballTeamID}`);
    }
}
