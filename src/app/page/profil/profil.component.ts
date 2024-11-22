import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/Chaina-Arison.pdf';
    link.download = 'Cv_Chaina_arison.pdf'; //
    link.click();
  }
}
