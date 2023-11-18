import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InterfaceEtudiantComponent } from './interface-etudiant/interface-etudiant.component';
import { InterfaceEnseignantComponent } from './interface-enseignant/interface-enseignant.component';
import { InformationComponent } from './information/information.component';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { GererEnseignantComponent } from './gerer-enseignant/gerer-enseignant.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';
import { ListStudentsComponent } from './list-students/list-students.component';

import { GereSpecialiterComponent } from './gere-specialiter/gere-specialiter.component';
import { GererModuleComponent } from './gerer-module/gerer-module.component';
import { GererNoteComponent } from './gerer-note/gerer-note.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path:'interface-etudiant',component:InterfaceEtudiantComponent},
  {path:'interface-enseignant',component:InterfaceEnseignantComponent},
  {path:'information',component:InformationComponent},
  {path:'interface-admin',component:InterfaceAdminComponent},
  {path:'gerer-enseignant',component:GererEnseignantComponent},
  { path: 'list', component: ListStudentsComponent, pathMatch: 'full' },
    { path: 'add-student', component: AddStudentsComponent },
    { path: 'edit/:id', component: EditStudentsComponent },
  {path:'gerer-specialiter',component:GereSpecialiterComponent},
  {path:'gerer-module',component:GererModuleComponent},
  {path:'gerer-note',component:GererNoteComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
