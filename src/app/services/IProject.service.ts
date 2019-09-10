import { Observable } from "rxjs";
import { Project } from "../models/project.model";

export interface IProjectService {

  // Retrieve all the projects from the back end
  GetAll(): Observable<Project[]>;

  // Retrieve one single project from the list
  Get(id: number): Observable<Project>;

  // Create & Delete enable this module to be used for non-technical posters' websites

  // Create a new project - building out an 'admin' view to simplify adding projects
  Create(project: Project): Observable<Project>;

  // Remove a project if need be - again, part of the 'admin' view
  Delete(id: number): Observable<boolean>;

  // Updates a project
  Update(id: number, project: Project): Observable<Project>;
}