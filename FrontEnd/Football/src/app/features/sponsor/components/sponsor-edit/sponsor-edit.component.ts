import { Component, OnInit } from '@angular/core';
import { AddSponsor, HasDeals, SponsorDetails } from '../../models/sponsors.models';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sponsor-edit',
  templateUrl: './sponsor-edit.component.html',
  styleUrls: ['./sponsor-edit.component.css']
})
export class SponsorEditComponent implements OnInit{
  sponsorID: number = 0;
  name: string = "";
  foundingYear: number = 0;
  nationality: string = "";
  netWorth: number = 0;
  domain: string = "";
  sponsors: HasDeals[] = [];
  
  constructor(private apiSrv: ApiService, private activatedRoute: ActivatedRoute, private router: Router ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.sponsorID = params['id'];
      this.apiSrv.getSponsorDetails(this.sponsorID).subscribe((data : SponsorDetails) => {
        this.name = data.name;
        this.foundingYear = data.foundingYear;
        this.nationality = data.nationality;
        this.netWorth = data.netWorth;
        this.domain = data.domain;
        this.sponsors = data.sponsors;
      })
    })
  }
  editSponsor(){
    if (this.name && this.nationality && this.netWorth && this.domain){
      if (this.netWorth > 0){
        const sponsor: SponsorDetails = {
          name: this.name,
          foundingYear: this.foundingYear,
          nationality: this.nationality,
          netWorth: this.netWorth,
          domain: this.domain,
          sponsors: this.sponsors
        }
        alert("Sponsor was updated succesfully!")
        this.apiSrv.editSponsor(this.sponsorID, sponsor).subscribe(result => console.log(result));
        this.name = sponsor.name;
        this.foundingYear = sponsor.foundingYear;
        this.nationality = sponsor.nationality;
        this.netWorth = sponsor.netWorth;
        this.domain = sponsor.domain;
      }
      else{
        alert("NetWorth must be over 0")
      }
    }
    else{
      alert("All fields must be filled in")
    } 
  }
}
