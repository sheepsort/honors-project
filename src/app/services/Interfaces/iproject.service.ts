import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project.model';

export interface IProjectService {

    /* This interface will provide the template for its partner service, ProjectService, which will be injected as needed.
    ** It performs CRUD operations on a mock API, found at backend/db.json */

    // Retrieves all projects as an array of Project-typed objects
    GetAllProjects(): Observable<Project[]>;

    // Retrieve a project from the array; @param id is the ID of the project to retrieve
    GetProject(id: number): Observable<Project>;

    // Create a new task; @param project is the project object to create and add to the project array
    CreateProject(project: Project): Observable<Project>;

    // Deletes a project based on @param id, which is the ID number of the project to delete
    DeleteProject(id: number);

    // Update a project; requires two @params - the first is the ID of the project, the second is the entire project object.
    UpdateProject(id: number, project: Project): Observable<Project>;

}