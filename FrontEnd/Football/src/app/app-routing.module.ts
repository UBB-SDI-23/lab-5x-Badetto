import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { OverviewComponent } from './features/footballteam/components/overview/overview.component';
import { DetailsComponent } from './features/footballteam/components/details/details.component';
import { AddComponent } from './features/footballteam/components/add/add.component';
import { EditComponent } from './features/footballteam/components/edit/edit.component';
import { DeleteComponent } from './features/footballteam/components/delete/delete.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
