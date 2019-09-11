import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [];

  constructor(
    public projService: ProjectService
  ) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    return this.projService.GetAllProjects()
      .subscribe((data: Project[]) => {this.projects = data;})
  }

}
