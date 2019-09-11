import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Project } from '../models/project.model';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    private API_Path: string = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    public GetAllProjects(): Observable<Project[]> {
        return this.http
            .get<Project[]>(this.API_Path + '/projects')
            .pipe(
                retry(1),
                catchError(this.throwError)
            )
    }

    GetProject(id: number): Observable<Project> {
        return this.http
            .get<Project>(this.API_Path + '/projects/' + id)
            .pipe(
                retry(1),
                catchError(this.throwError)
            )
    }

    CreateProject(project: Project): Observable<Project> {
        return this.http
            .post<Project>(this.API_Path + '/projects', JSON.stringify(project), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.throwError)
            )
    }

    DeleteProject(id: number){
        return this.http
            .delete(this.http + '/projects/' + id, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.throwError)
            )
    }

    UpdateProject(id: number, project: Project): Observable<Project>{
        return this.http
            .put<Project>(this.API_Path + '/projects/' + id, JSON.stringify(project), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.throwError)
            )
    }

    throwError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent){
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nError Message: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

}