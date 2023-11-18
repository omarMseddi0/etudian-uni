
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {
  addForm: any;
  specialiters: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentsService
  ) {
    this.addForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', [Validators.required, Validators.maxLength(20)]],
      mot_de_passe: ['', [Validators.required, Validators.maxLength(20)]],
      id_Specialiter: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getSpecialiters();
  }

  getSpecialiters() {
    this.studentService.getSpecialiters().subscribe((data: any) => {
      this.specialiters = data.data;
    });
  }

  onSubmit() {
    this.studentService.createStudent(this.addForm.value).subscribe(
      data => {
        this.router.navigate(['/list']);
      },
      error => {
        alert(error);
      }
    );
  }
}
