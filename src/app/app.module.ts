import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { ProjectDetailComponent } from './components/projects/project-detail/project-detail.component';
import { ProjectNavbarComponent } from './components/projects/project-navbar/project-navbar.component';
import { ProjectService } from './services/project.service';
import { ProjectCardComponent } from './components/projects/project-list/project-card/project-card.component';
import { DisplayProjectButtonComponent } from './components/projects/project-list/project-card/display-project-button/display-project-button.component';
import { DefaultProjectComponent } from './components/projects/project-detail/default-project/default-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectNavbarComponent,
    ProjectCardComponent,
    DisplayProjectButtonComponent,
    DefaultProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
