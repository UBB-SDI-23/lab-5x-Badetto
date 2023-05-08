import { Component } from '@angular/core';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { AddSponsor } from '../../models/sponsors.models';

@Component({
  selector: 'app-sponsor-add',
  templateUrl: './sponsor-add.component.html',
  styleUrls: ['./sponsor-add.component.css']
})
export class SponsorAddComponent {
  name: string = "";
  foundingYear: number = 0;
  nationality: string = "";
  netWorth: number = 0;
  domain: string = "";
  constructor(private apiSvc: ApiService){}
  addSponsor(){
    if (this.name && this.domain && this.nationality && this.netWorth){
      if (this.netWorth > 0){
        const sponsor: AddSponsor = {
          name: this.name,
          foundingYear: this.foundingYear,
          nationality: this.nationality,
          netWorth: this.netWorth,
          domain: this.domain
        }
        this.apiSvc.addSponsor(sponsor).subscribe();
        this.name="";
        this.foundingYear=0;
        this.nationality="";
        this.netWorth=0;
        this.domain="";
        alert("Sponsor was added succesfully!")
      }
      else{
        alert("NetWorth must be greater than 0")
      }
    }
    else{
      alert("All fields must be filled in")
    }
  }
}
