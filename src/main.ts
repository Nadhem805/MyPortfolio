import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { importProvidersFrom } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideAnimations(),
    importProvidersFrom(ModalModule.forRoot()),
    importProvidersFrom(CarouselModule.forRoot()),
    importProvidersFrom(CollapseModule.forRoot()),
    FormsModule,
    importProvidersFrom(AccordionModule.forRoot())
    
  ]
}).catch(err => console.error(err));