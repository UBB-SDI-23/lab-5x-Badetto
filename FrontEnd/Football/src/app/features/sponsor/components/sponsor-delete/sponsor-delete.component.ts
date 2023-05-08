import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/services/services.api.service.service';

@Component({
  selector: 'app-sponsor-delete',
  templateUrl: './sponsor-delete.component.html',
  styleUrls: ['./sponsor-delete.component.css']
})
export class SponsorDeleteComponent implements OnInit{
  sponsorID: number = 0;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.sponsorID = params['id'];
    })
  }
  constructor(private apiSrv: ApiService, private activatedRoute: ActivatedRoute, private router: Router ){}
  deleteSponsor() {
    this.apiSrv.deleteSponsor(this.sponsorID).subscribe();
    this.router.navigateByUrl(`sponsor`);
    alert("Sponsor was deleted succesfully!")
  }
  cancel(){
    this.router.navigateByUrl(`sponsor/${this.sponsorID}`);
  }
}
