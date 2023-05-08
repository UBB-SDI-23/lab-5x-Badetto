import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AddFootballTeamDto, EditFootballTeamDto, FootballTeam } from 'src/app/features/footballteam/models/footballteams.models';
import { NrPlayers } from 'src/app/features/footballteam/models/nrplayers.models';
import { AddPlayerDto, Player, PlayerDetails } from 'src/app/features/player/models/players.models';
import { AddSponsor, Sponsor, SponsorDetails } from 'src/app/features/sponsor/models/sponsors.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //baseurl = 'https://sdi-assignment.mooo.com/api/';
  baseurl = 'http://127.0.0.1:8000/api/';
  
  constructor(private http: HttpClient) { }

  getFootballTeams(pageIndex: number, pageSize: number): Observable<FootballTeam[]> {
    const params = {
      page: pageIndex,
      page_size: pageSize
    };
  
    return this.http.get(`${this.baseurl}football-team/`, { params }).pipe(
      map(response => {
        const data = response as any;
        return data.results as FootballTeam[];
      })
    );
  }
  getPlayers(pageIndex: number, pageSize: number): Observable<Player[]> {
    const params = {
      page: pageIndex,
      page_size: pageSize
    };
    return this.http.get(`${this.baseurl}player/`, { params }).pipe(
      map(response => {
        const data = response as any;
        return data.results as Player[];
      })
    );
  }
  getSponsors(pageIndex: number, pageSize: number): Observable<Sponsor[]>{
    const params = {
      page: pageIndex,
      page_size: pageSize
    };
    return this.http.get(`${this.baseurl}sponsor/`, { params }).pipe(
      map(response => {
        const data = response as any;
        return data.results as Sponsor[];
      })
    );
  }
  getFootBallTeamAndPlayers(courseId: number): Observable<FootballTeam>{
    return this.http.get(`${this.baseurl}football-team/${courseId}/`) as Observable<FootballTeam>
  }
  getPlayerDetails(courseId:number): Observable<PlayerDetails>{
    return this.http.get(`${this.baseurl}player/${courseId}/`) as Observable<PlayerDetails>
  }
  getSponsorDetails(courseId:number): Observable<SponsorDetails>{
    return this.http.get(`${this.baseurl}sponsor/${courseId}/`) as Observable<SponsorDetails>
  }
  getNrPlayers(footballTeamID: number): Observable<NrPlayers>{
    return this.http.get(`${this.baseurl}football-team/${footballTeamID}/nr-players/`) as Observable<NrPlayers>
  }
  addFootballTeam(footballteam: AddFootballTeamDto): Observable<FootballTeam>{
    return this.http.post(`${this.baseurl}football-team/`, footballteam) as Observable<FootballTeam>
  }
  addPlayer(player: AddPlayerDto): Observable<Player>{
    return this.http.post(`${this.baseurl}player/`, player) as Observable<Player>
  }
  addSponsor(sponsor: AddSponsor): Observable<AddSponsor>{
    return this.http.post(`${this.baseurl}sponsor/`, sponsor) as Observable<AddSponsor>
  }
  editFootballTeam(footballTeamID: number, footballteam: EditFootballTeamDto): Observable<EditFootballTeamDto>{
    return this.http.put(`${this.baseurl}football-team/${footballTeamID}/`, footballteam) as Observable<EditFootballTeamDto>
  }
  editPlayer(playerID: number, player: AddPlayerDto): Observable<AddPlayerDto>{
    return this.http.put(`${this.baseurl}player/${playerID}/`, player) as Observable<AddPlayerDto>
  }
  editSponsor(sponsorID: number, sponsor: SponsorDetails): Observable<SponsorDetails>{
    return this.http.put(`${this.baseurl}sponsor/${sponsorID}/`, sponsor) as Observable<SponsorDetails>
  }
  deleteFootballTeam(footballTeamID: number): Observable<FootballTeam>{
    return this.http.delete(`${this.baseurl}football-team/${footballTeamID}/`) as Observable<FootballTeam>
  }
  deletePlayer(playerID: number): Observable<Player>{
    return this.http.delete(`${this.baseurl}player/${playerID}/`) as Observable<Player>
  }
  deleteSponsor(sponsorID: number): Observable<Sponsor>{
    return this.http.delete(`${this.baseurl}sponsor/${sponsorID}/`) as Observable<Sponsor>
  }
}
