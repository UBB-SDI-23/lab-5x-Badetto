import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { OverviewComponent } from './features/footballteam/components/overview/overview.component';
import { DetailsComponent } from './features/footballteam/components/details/details.component';
import { AddComponent } from './features/footballteam/components/add/add.component';
import { EditComponent } from './features/footballteam/components/edit/edit.component';
import { DeleteComponent } from './features/footballteam/components/delete/delete.component';
import { PlayerOverviewComponent } from './features/player/components/player-overview/player-overview.component';
import { PlayerAddComponent } from './features/player/components/player-add/player-add.component';
import { PlayerDetailsComponent } from './features/player/components/player-details/player-details.component';
import { PlayerDeleteComponent } from './features/player/components/player-delete/player-delete.component';
import { PlayerEditComponent } from './features/player/components/player-edit/player-edit.component';
import { SponsorOverviewComponent } from './features/sponsor/components/sponsor-overview/sponsor-overview.component';
import { SponsorAddComponent } from './features/sponsor/components/sponsor-add/sponsor-add.component';
import { SponsorDetailsComponent } from './features/sponsor/components/sponsor-details/sponsor-details.component';
import { SponsorDeleteComponent } from './features/sponsor/components/sponsor-delete/sponsor-delete.component';
import { SponsorEditComponent } from './features/sponsor/components/sponsor-edit/sponsor-edit.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },    
  {
    path: "football-team",
    component: OverviewComponent
  },
  {
    path: "football-team/add",
    component: AddComponent
  },
  {
    path: "football-team/delete/:id",
    component: DeleteComponent
  },
  {
    path: "football-team/edit/:id",
    component: EditComponent
  },
  {
    path: "football-team/:id",
    component: DetailsComponent
  },
  {
    path: "player",
    component: PlayerOverviewComponent
  },
  {
    path: "player/add",
    component: PlayerAddComponent
  },
  {
    path: "player/:id",
    component: PlayerDetailsComponent
  },
  {
    path: "player/delete/:id",
    component: PlayerDeleteComponent
  },
  {
    path: "player/edit/:id",
    component: PlayerEditComponent
  },
  {
    path: "sponsor",
    component: SponsorOverviewComponent
  },
  {
    path: "sponsor/add",
    component: SponsorAddComponent
  },
  {
    path: "sponsor/:id",
    component: SponsorDetailsComponent
  },
  {
    path: "sponsor/delete/:id",
    component: SponsorDeleteComponent
  },
  {
    path: "sponsor/edit/:id",
    component: SponsorEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
