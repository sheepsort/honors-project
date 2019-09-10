import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { IProjectService } from './IProject.service';
import { Project } from '../models/project.model';

const API_Address = 'http://localhost:3000';

@Injectable()
export class ProjectService implements IProjectService {
  constructor(private _http: HttpClient) {}

  public GetAll(): Observable<Project[]> {
    return (
      this._http
        .get(API_Address + '/projects')
        .map(response => {
          let projectList = response.json();
          return projectList.map(project => new Project(project));
        })
        .catch(this.throw)
    );
  }

  public Get(id: number): Observable<Project> {
    return this._http
      .get(`${API_Address}/projects/${id}`)
      .map(response => {
        return new Project(response.json());
      })
      .catch(this.throw);
  }

  public Create(project: Project): Observable<Project> {
    return this._http
      .post(`${API_Address}/projects/${project}`)
      .map(response => {
        return new Project(response.json());
      })
      .catch(this.throw);
  }

  public Delete(id: number):Observable<boolean> {
    this._http.delete(`${API_Address}/projects/${id}`);
  }

  public Update(id: number, project: Project): Observable<Project> {
    this._http.put(`${API_Address}/projects/${id}`);
  }

  private throw(error: Response | any) {
    console.error("ProjectService::throw", error);
    return Observable.throw(error);
  }
}
