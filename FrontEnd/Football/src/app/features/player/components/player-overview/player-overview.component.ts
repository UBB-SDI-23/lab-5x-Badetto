import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Player } from 'src/app/features/player/models/players.models';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { Router } from '@angular/router';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-player-overview',
  templateUrl: './player-overview.component.html',
  styleUrls: ['./player-overview.component.css']
})
export class PlayerOverviewComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'number', 'age', 'rating', 'position', 'nationality'];

  players: Player[] = [];
  dataSource = new MatTableDataSource<Player>(this.players);

  pageIndex = 1;
  pageSize = 10;
  totalResults = 1000000;

  constructor(private apiSvc: ApiService, private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.apiSvc.getPlayers(this.pageIndex, this.pageSize).subscribe((result: Player[]) => {
      this.players = result;
      this.dataSource.data = this.players;
      this.table.renderRows();
    }, error => {
      console.error(error);
    });
  }

  goToAdd() {
    this.router.navigateByUrl(`player/add`);
  }

  goToDetails(courseId: number) {
    this.router.navigateByUrl(`player/${courseId}`);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex+1;
    this.pageSize = event.pageSize;
    this.getPlayers();
  }
}
