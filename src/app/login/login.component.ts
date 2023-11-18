import { Component } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private http: HttpClient, private router: Router , private route: ActivatedRoute) { }

  username!: string;
password!: string;

goToLogin() {
  this.login(this.username, this.password).subscribe(data => {
    if (data.length > 0) {
      console.log('Login successful', data);
      let isEnseignant = data.some((user: any) => 'id_Enseignant' in user);
      let isAdmin = data.some((user: any) => 'id_Administrateur' in user);
      let isEtudiant = data.some((user: any) => 'id_Etudiant' in user);
      
      if (isAdmin) {
        this.router.navigate(['/interface-admin'], { relativeTo: this.route });
      }
      else if (isEnseignant) {
        this.router.navigate(['/interface-enseignant'], { relativeTo: this.route });
      }
      
      else  if (isEtudiant) {
        this.router.navigate(['/interface-etudiant'], { relativeTo: this.route });
      }
    } else {
      alert('Login failed');
      // Show an error message or handle the failed login attempt.
    }
  });
}
   
  
  login(username: string, password: string) {
    const body = { username: username, password: password };
    return this.http.post<any[]>('http://localhost/Gest-Universitaire/api/login.php', body);
  }
  
  

}
