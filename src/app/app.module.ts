import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './title/title.component';
import { LoginComponent } from './login/login.component';
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';
import { InterfaceEtudiantComponent } from './interface-etudiant/interface-etudiant.component';
import { InterfaceEnseignantComponent } from './interface-enseignant/interface-enseignant.component';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { GererEnseignantComponent } from './gerer-enseignant/gerer-enseignant.component';

import { AddStudentsComponent } from './add-students/add-students.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GereSpecialiterComponent } from './gere-specialiter/gere-specialiter.component';
import { GererModuleComponent } from './gerer-module/gerer-module.component';
import { HttpClientModule } from '@angular/common/http';
import { GererNoteComponent } from './gerer-note/gerer-note.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    AddStudentsComponent,
    ListStudentsComponent,
    EditStudentsComponent,
    NavbarComponent,
       HomeComponent,
       TitleComponent,
       LoginComponent,
       InformationComponent,
       FooterComponent,
       InterfaceEtudiantComponent,
       InterfaceEnseignantComponent,
       InterfaceAdminComponent,
       GererEnseignantComponent,
      
       GereSpecialiterComponent,
       GererModuleComponent,
       GererNoteComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
