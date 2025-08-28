import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Tag } from '../_models/Tags';
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
import { CollapseDirective } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCardComponent, CommonModule, CollapseDirective,FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
 projects ={} as Project[];
 isCollapsed: boolean = true;
 typescript: boolean= false;
 angular: boolean= false;
 django: boolean= false;
 python: boolean= false;
 javascript: boolean= false;
 html: boolean= false;
 filtering: boolean= false;
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Ben Amara - Portfolio");
  }
  ngOnInit(): void {
    this.projects=this.projectService.GetProjects();
  }
  Filter(){
    let filterTags:Tag[]=[];
    if(this.typescript){
      filterTags.push(Tag.TypeScript);
    }
    if(this.angular){
      filterTags.push(Tag.Angular);
    }
    if(this.django){
      filterTags.push(Tag.Django);
    } 
    if(this.python){
      filterTags.push(Tag.Python);
    }
    if(this.javascript){
      filterTags.push(Tag.JavaScript);
    }
    if(this.html){
      filterTags.push(Tag.HTML);
    }
    if(this.python || this.angular || this.django || this.typescript || this.javascript || this.html){
      this.filtering=true;
    }
    else{
      this.filtering=false;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }
  ResetFilters(){
    this.typescript= false;
    this.angular= false;
    this.django= false;
    this.python= false;
    this.javascript= false;
    this.html= false;
    this.filtering=false;
    this.projects=this.projectService.GetProjects();
  }
}
