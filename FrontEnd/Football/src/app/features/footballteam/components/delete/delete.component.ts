import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/services/services.api.service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  footballTeamID: number = 0;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.footballTeamID = params['id'];
    })
  }
  constructor(private apiSrv: ApiService, private activatedRoute: ActivatedRoute, private router: Router ){}
  deleteFootballTeam() {
    this.apiSrv.deleteFootballTeam(this.footballTeamID).subscribe();
    this.router.navigateByUrl(`football-team`);
    alert("Team was deleted succesfully!")
  }
  cancel(){
    this.router.navigateByUrl(`football-team/edit/${this.footballTeamID}`);
  }
}
