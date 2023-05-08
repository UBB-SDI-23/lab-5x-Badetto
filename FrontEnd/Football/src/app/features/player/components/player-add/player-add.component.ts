import { Component } from '@angular/core';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { AddPlayerDto } from '../../models/players.models';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent {
  name: string = "";
  number: number = 0;
  age: number = 0;
  rating: number = 0;
  position: string = "";
  nationality: string = "";
  constructor(private apiSvc: ApiService){}
  addPlayer(){
    if (this.name && this.nationality){
      if (this.age > 0 && this.age < 100){
        const player: AddPlayerDto = {
          name: this.name,
          number: this.number,
          age: this.age,
          rating: this.rating,
          position: this.position,
          nationality: this.nationality
        }
        this.apiSvc.addPlayer(player).subscribe();
        this.name = "",
        this.number = 0,
        this.age = 0,
        this.rating = 0,
        this.position = "",
        this.nationality= ""
        alert("Team was added succesfully!")
      }
      else{
        alert("Age must be between 1 and 99")
      }
    }
    else{
      alert("Name And Nationality must be filled")
    }
  }
}
