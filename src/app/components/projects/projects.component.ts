import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // bool value for displaying content; set to false to create white space until user interacts
  public show: boolean = false;

  // Generic array of type Project:
  // TODO: store this data as a JSON file on the 'backend,' to be retrieved with CRUD operations
  projects: Project[] = [
    new Project('Project One','github.com','Brief Description',123),
    new Project('Project Two', 'https://github.com','Second Description, a little longer this time.',456),
    new Project('Project Three', 'https://github.com','Third Description.',789),
    new Project('Project Four', 'https://github.com','Hard coding a fourth description.',1010),
  ];

  constructor() { }

  ngOnInit() {
  }

  // Displays a project in a card when any of the buttons are clicked
  onDisplayProject() {
    this.show = true;
  }

  // TODO: display Project data based on which button is clicked, dynamically modifying contents of the card.
  onProjectSelection(event) {
    console.log(event);
  }

}
