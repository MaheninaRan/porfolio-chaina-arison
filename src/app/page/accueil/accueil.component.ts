import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/Chaina-Arison.pdf';
    link.download = 'cv_Chaina_Arison.pdf';
    link.click();
  }
}
