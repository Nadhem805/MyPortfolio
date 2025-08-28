import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SlideComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  imports: [CommonModule,CarouselModule,SlideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredProjects = {} as Project;
  constructor(private titleService: Title,private projectService:ProjectsService) {
    this.titleService.setTitle("Ben Amara - Home");
  }
  ngOnInit(): void {
    this.featuredProjects=this.projectService.GetProjectById(1);
  }

}
