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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    DetailsComponent,
    AddComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
