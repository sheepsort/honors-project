export class Project {
    projectName: string;
    githubUrl: string;
    description: string;
    id: number;

    // All Projects should have each of these props when created with the new Project command
    constructor(name: string, github: string, desc: string, id: number) {
        this.projectName = name;
        this.githubUrl = github;
        this.description = desc;
        this.id = id;
    }
}