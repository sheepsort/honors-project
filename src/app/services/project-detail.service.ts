import { EventEmitter, Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from './project.service';

@Injectable()
export class ProjectDetailService {
    private selectedProject = new EventEmitter<Project>();

    constructor(private projService: ProjectService) {}

    GetProject() {
        return this.selectedProject;
    }
}