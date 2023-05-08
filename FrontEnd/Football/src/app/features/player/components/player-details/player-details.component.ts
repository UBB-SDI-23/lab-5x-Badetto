import { Component } from '@angular/core';
import { Player, PlayerDetails } from '../../models/players.models';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent {
  playerID: number = 0;
  player?: PlayerDetails
  constructor(private apiSrv: ApiService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.playerID = params['id'];
        this.apiSrv.getPlayerDetails(this.playerID).subscribe((data : PlayerDetails) => {
          this.player = data;
        })
      })
  }
  goToEdit(footballTeamID: number){
    this.router.navigateByUrl(`player/edit/${this.playerID}`);
  }
  goToDelete(footballTeamID: number){
    this.router.navigateByUrl(`player/delete/${this.playerID}`);
  }
}
