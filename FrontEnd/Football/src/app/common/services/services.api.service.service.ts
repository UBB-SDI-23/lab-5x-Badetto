import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddFootballTeamDto, EditFootballTeamDto, FootballTeam } from 'src/app/features/footballteam/models/footballteams.models';
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
  addFootballTeam(footballteam: AddFootballTeamDto): Observable<FootballTeam>{
    return this.http.post(`${this.baseurl}football-team/`, footballteam) as Observable<FootballTeam>

  }
  editFootballTeam(footballTeamID: number, footballteam: EditFootballTeamDto): Observable<EditFootballTeamDto>{
    return this.http.put(`${this.baseurl}football-team/${footballTeamID}/`, footballteam) as Observable<EditFootballTeamDto>
  }
  deleteFootballTeam(footballTeamID: number): Observable<FootballTeam>{
    return this.http.delete(`${this.baseurl}football-team/${footballTeamID}/`) as Observable<FootballTeam>
  }
}
