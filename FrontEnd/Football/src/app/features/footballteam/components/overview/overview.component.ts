import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FootballTeam } from '../../models/footballteams.models';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { Router } from '@angular/router';
import { NrPlayers } from '../../models/nrplayers.models';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit{
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'nickname', 'value', 'nrplayers']
  footballteams: FootballTeam[] = [];
  numberplayers: Number[] = [];
  dataSource = new MatTableDataSource<FootballTeam>(this.footballteams);

  constructor(private apiSvc: ApiService, 
    private router: Router) {}
  ngOnInit(): void {
    this.apiSvc.getFootballTeams().subscribe((result: FootballTeam[]) => {
      for (let i = 0; i < result.length; i++) {
        this.footballteams.push(result[i]) 
        this.apiSvc.getNrPlayers(result[i].id).subscribe((result2: NrPlayers) =>{
          this.footballteams[i]["nrplayers"] = result2.nr_players
        })
      }
      this.table.renderRows();   
    });
   
    this.dataSource = new MatTableDataSource<FootballTeam>(this.footballteams);
    this.dataSource.paginator = this.paginator;
    
  }
  goToDetails(courseId: number){
    this.router.navigateByUrl(`football-team/${courseId}`)
  }
  goToAdd(){
    this.router.navigateByUrl(`football-team/add`);
  }
  sortName(){
    this.footballteams.sort((a, b) => a.name.localeCompare(b.name))
    this.table.renderRows();
  }
}