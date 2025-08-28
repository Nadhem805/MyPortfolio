import { Injectable, Type } from '@angular/core';
import { Tag } from '../_models/Tags';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
      {
        id: 1,
        name: "My Portfolio Website",
        summary: "Developed an recruitment application with IA.",
        description: 'I developed an AI-powered recruitment application that optimizes the hiring process by matching candidates to job offers. The system allows companies to post vacancies while candidates can easily submit their CVs online. Using machine learning and natural language processing, the application analyzes skills, experience, and education to calculate a matching score for each applicant. This enables recruiters to quickly identify the most suitable profiles. The project was built with Angular, Spring Boot, MongoDB, and Python (Scikit-learn) to ensure scalability, efficiency, and accuracy.',
        projectLink: '//github.com/NadhemBenAmara/Website-Application',
        pictures: ["../../assets/images/image1.jpg","../../assets/images/image2.png","../../assets/images/image3.png"],
        tags: [Tag.Angular, Tag.TypeScript]
      },
      {
        id: 2,
        name: "Website Application",
        summary: "This is another project summary.",
        description: 'cccccccccccccccccccccccccccccccccccccccc',
        projectLink: '//github.com/NadhemBenAmara/Website-Application',
        pictures: ["../../assets/images/image1.jpg","../../assets/images/image2.png","../../assets/images/image3.png"],
        tags: [Tag.Python, Tag.Django]
      },
      {
        id: 3,
        name: "Portfolio Website",
        summary: "This is a portfolio website project summary.",
        description: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
        projectLink: '//github.com/NadhemBenAmara/Portfolio-Website',
        pictures: ["../../assets/images/image1.jpg","../../assets/images/image2.png","../../assets/images/image3.png"],
        tags: [Tag.HTML, Tag.JavaScript]
      }
    ];

  constructor() { }

  GetProjects(){
    return this.projects;
  } ;
  GetProjectById(id:number): Project{
   let project= this.projects.find(project=>project.id===id);
   if(project === undefined){
    throw new TypeError("Project not found with that id: "+id);
   }
    return project;
    
  }
  
  GetProjectByFilter(filterTags:Tag[]){
    let filteredProjects:Project[]=[];
    this.projects.forEach(function(project){
      let foundAll= true;

      filterTags.forEach(function(filtertag){
        if(project.tags.includes(filtertag)== false){
          foundAll=false;
        }
      });
      if(foundAll){
        filteredProjects.push(project);
      }

    });
    return filteredProjects;
  }
}
