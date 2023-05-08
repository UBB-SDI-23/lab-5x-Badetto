import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { OverviewComponent } from './features/footballteam/components/overview/overview.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './features/footballteam/components/details/details.component';
import { AddComponent } from './features/footballteam/components/add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './features/footballteam/components/edit/edit.component';
import { DeleteComponent } from './features/footballteam/components/delete/delete.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlayerOverviewComponent } from './features/player/components/player-overview/player-overview.component';
import { PlayerDetailsComponent } from './features/player/components/player-details/player-details.component';
import { PlayerAddComponent } from './features/player/components/player-add/player-add.component';
import { PlayerEditComponent } from './features/player/components/player-edit/player-edit.component';
import { PlayerDeleteComponent } from './features/player/components/player-delete/player-delete.component';
import { SponsorOverviewComponent } from './features/sponsor/components/sponsor-overview/sponsor-overview.component';
import { SponsorAddComponent } from './features/sponsor/components/sponsor-add/sponsor-add.component';
import { SponsorEditComponent } from './features/sponsor/components/sponsor-edit/sponsor-edit.component';
import { SponsorDetailsComponent } from './features/sponsor/components/sponsor-details/sponsor-details.component';
import { SponsorDeleteComponent } from './features/sponsor/components/sponsor-delete/sponsor-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    DetailsComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    PlayerOverviewComponent,
    PlayerDetailsComponent,
    PlayerAddComponent,
    PlayerEditComponent,
    PlayerDeleteComponent,
    SponsorOverviewComponent,
    SponsorAddComponent,
    SponsorEditComponent,
    SponsorDetailsComponent,
    SponsorDeleteComponent
  ],
  imports: [
    BrowserModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    AppRoutingModule,
    MatListModule,
    MatDialogModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [MatPaginatorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
