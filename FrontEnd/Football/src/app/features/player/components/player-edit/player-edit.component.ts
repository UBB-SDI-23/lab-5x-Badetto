import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { AddPlayerDto, PlayerDetails } from '../../models/players.models';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit{
  playerID: number = 0;
  name: string = "";
  number: number = 0;
  age: number = 0;
  rating: number = 0;
  position: string = "";
  nationality: string = "";
  constructor(private apiSrv: ApiService, private activatedRoute: ActivatedRoute, private router: Router ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.playerID = params['id'];
      this.apiSrv.getPlayerDetails(this.playerID).subscribe((data : PlayerDetails) => {
        this.name = data.name;
        this.number = data.number;
        this.age = data.age;
        this.rating = data.rating;
        this.position = data.position;
        this.nationality = data.nationality;
      })
    })
  }
  editPlayer(){
    if (this.name && this.nationality){
      if (this.age>0 && this.age<100){
        const player: AddPlayerDto = {
          name: this.name,
          number: this.number,
          age: this.age,
          rating: this.rating,
          position: this.position,
          nationality: this.nationality
        }
        alert("Player was updated succesfully!")
        this.apiSrv.editPlayer(this.playerID, player).subscribe(result => console.log(result));
        this.name = player.name;
        this.number = player.number;
        this.age = player.age;
        this.rating = player.rating;
        this.position = player.position;
        this.nationality = player.nationality;
      }
      else{
        alert("Age must be between 1 and 99")
      }
    }
    else{
      alert("All fields must be filled in")
    } 
  }
}
