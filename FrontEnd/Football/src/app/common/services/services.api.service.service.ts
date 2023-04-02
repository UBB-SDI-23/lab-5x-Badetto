import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FootballTeam } from 'src/app/features/footballteam/models/footballteams.models';
import { NrPlayers } from 'src/app/features/footballteam/models/nrplayers.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = 'http://ec2-16-170-135-166.eu-north-1.compute.amazonaws.com/api/';
  constructor(private http: HttpClient) { }

  getFootballTeams() : Observable<FootballTeam[]>{  
    return this.http.get(`${this.baseurl}football-team/`) as Observable<FootballTeam[]>
  }
  getFootBallTeamAndPlayers(courseId: number): Observable<FootballTeam>{
    return this.http.get(`${this.baseurl}football-team/${courseId}/`) as Observable<FootballTeam>
  }
  getNrPlayers(footballTeamID: number): Observable<NrPlayers>{
    return this.http.get(`${this.baseurl}football-team/${footballTeamID}/nr-players/`) as Observable<NrPlayers>
  }
}
