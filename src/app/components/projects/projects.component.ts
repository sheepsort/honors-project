import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // bool value for displaying content; set to false to create white space until user interacts
  public show: boolean = false;

  // Generic array of type Project, to be removed when Project Detail component is finished.
  projects: Project[] = [];

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
