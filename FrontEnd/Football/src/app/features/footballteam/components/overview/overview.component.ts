import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FootballTeam } from '../../models/footballteams.models';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { Router } from '@angular/router';
import { NrPlayers } from '../../models/nrplayers.models';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'nickname', 'value', 'nrplayers'];

  footballteams: FootballTeam[] = [];
  dataSource = new MatTableDataSource<FootballTeam>(this.footballteams);

  pageIndex = 1;
  pageSize = 10;
  totalResults = 1000000;

  constructor(private apiSvc: ApiService, private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.getFootballTeams();
  }

  getFootballTeams() {
    this.apiSvc.getFootballTeams(this.pageIndex, this.pageSize).subscribe((result: FootballTeam[]) => {
      this.footballteams = result;
      this.dataSource.data = this.footballteams;

      const observables = this.footballteams.map(team => this.apiSvc.getNrPlayers(team.id));
      forkJoin(observables).subscribe((results: NrPlayers[]) => {
        for (let i = 0; i < results.length; i++) {
          this.footballteams[i]['nrplayers'] = results[i].nr_players;
        }
        this.table.renderRows();
      });
    }, error => {
      console.error(error);
    });
  }

  goToDetails(courseId: number) {
    this.router.navigateByUrl(`football-team/${courseId}`);
  }

  goToAdd() {
    this.router.navigateByUrl(`football-team/add`);
  }

  sortName() {
    this.footballteams.sort((a, b) => a.name.localeCompare(b.name));
    this.table.renderRows();
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex+1;
    this.pageSize = event.pageSize;
    this.getFootballTeams();
  }
}
