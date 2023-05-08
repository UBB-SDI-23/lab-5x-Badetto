import { Component, OnInit } from '@angular/core';
import { SponsorDetails } from '../../models/sponsors.models';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sponsor-details',
  templateUrl: './sponsor-details.component.html',
  styleUrls: ['./sponsor-details.component.css']
})
export class SponsorDetailsComponent implements OnInit{
  sponsorID: number = 0;
  sponsor?: SponsorDetails
  constructor(private apiSrv: ApiService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.sponsorID = params['id'];
        this.apiSrv.getSponsorDetails(this.sponsorID).subscribe((data : SponsorDetails) => {
          this.sponsor = data;
        })
      })
  }
  goToEdit(sponsorID: number){
    this.router.navigateByUrl(`sponsor/edit/${this.sponsorID}`);
  }
  goToDelete(sponsorID: number){
    this.router.navigateByUrl(`sponsor/delete/${this.sponsorID}`);
  }
}
