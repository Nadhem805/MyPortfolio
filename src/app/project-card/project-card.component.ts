import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService, ModalModule, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule], // ModalModule sera chargé globalement
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  OpenProjectModal() {
    const modalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState:{
        project: this.project
      } // Exemple de classe pour une modale large
    };
    // Ici il faut passer un composant ou un template, pas une chaîne vide
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
      
  }
}