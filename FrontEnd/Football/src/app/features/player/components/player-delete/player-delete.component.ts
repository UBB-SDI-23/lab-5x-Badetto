import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/services/services.api.service.service';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css']
})
export class PlayerDeleteComponent implements OnInit{
  playerID: number = 0;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.playerID = params['id'];
    })
  }
  constructor(private apiSrv: ApiService, private activatedRoute: ActivatedRoute, private router: Router ){}
  deletePlayer() {
    this.apiSrv.deletePlayer(this.playerID).subscribe();
    this.router.navigateByUrl(`player`);
    alert("Player was deleted succesfully!")
  }
  cancel(){
    this.router.navigateByUrl(`player/${this.playerID}`);
  }
}
