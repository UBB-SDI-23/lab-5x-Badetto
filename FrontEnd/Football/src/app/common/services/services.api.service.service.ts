import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FootballTeam } from 'src/app/features/footballteam/models/footballteams.models';

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
  getNrSponsors(): Observable<number[]>{
    return this.http.get(`${this.baseurl}football-team/nr-sponsors/`) as Observable<number[]>
  }
}
