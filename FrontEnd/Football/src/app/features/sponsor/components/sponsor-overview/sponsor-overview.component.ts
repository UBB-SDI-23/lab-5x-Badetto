import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Sponsor } from '../../models/sponsors.models';
import { ApiService } from 'src/app/common/services/services.api.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sponsor-overview',
  templateUrl: './sponsor-overview.component.html',
  styleUrls: ['./sponsor-overview.component.css']
})
export class SponsorOverviewComponent implements OnInit, AfterViewInit{
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'foundingYear', 'nationality', 'netWorth', 'domain'];

  sponsors: Sponsor[] = [];
  dataSource = new MatTableDataSource<Sponsor>(this.sponsors);

  pageIndex = 1;
  pageSize = 10;
  totalResults = 1000000;

  constructor(private apiSvc: ApiService, private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.getSponsors();
  }

  getSponsors() {
    this.apiSvc.getSponsors(this.pageIndex, this.pageSize).subscribe((result: Sponsor[]) => {
      this.sponsors = result;
      this.dataSource.data = this.sponsors;
    }, error => {
      console.error(error);
    });
  }

  goToDetails(courseId: number) {
    this.router.navigateByUrl(`sponsor/${courseId}`);
  }

  goToAdd() {
    this.router.navigateByUrl(`sponsor/add`);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex+1;
    this.pageSize = event.pageSize;
    this.getSponsors();
  }
}
