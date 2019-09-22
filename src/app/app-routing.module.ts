import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './components/projects/projects.component';
import { DefaultProjectComponent } from './components/projects/project-detail/default-project/default-project.component';
import { ProjectDetailComponent } from './components/projects/project-detail/project-detail.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/projects', pathMatch: 'full'},
    {path: 'projects', component: ProjectsComponent, children: [
        {path: '', component: DefaultProjectComponent},
        {path: ':id', component: ProjectDetailComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}