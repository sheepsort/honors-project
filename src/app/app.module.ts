import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { ProjectDetailComponent } from './components/projects/project-detail/project-detail.component';
import { ProjectNavbarComponent } from './components/projects/project-navbar/project-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
