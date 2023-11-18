import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  
})
export class EditStudentsComponent implements OnInit {
  addForm: any;
  student_id: any;
  specialiters: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentsService,
    private url: ActivatedRoute
  ) {
    this.addForm = this.formBuilder.group({
      id_Etudiant: [],
      nom: ['', Validators.required],
      prenom: ['', [Validators.required, Validators.maxLength(20)]],
      mot_de_passe: ['', [Validators.required, Validators.maxLength(20)]],
      id_Specialiter: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.student_id = this.url.snapshot.params['id'];
    if (this.student_id > 0) {
      this.studentService.getSingleStudent(this.student_id).subscribe((data: any) => {
        this.addForm.patchValue(data.data);
      });

      this.studentService.getSpecialiters().subscribe((data: any) => {
        this.specialiters = data.data;
      });
    }
  }

  onEdit() {
    this.studentService.editStudent(this.addForm.value).subscribe(
      (data: any) => {
        this.router.navigate(['/list']);
      },
      error => {
        alert(error);
      }
    );
  }
}

