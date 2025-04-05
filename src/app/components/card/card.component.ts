import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  cards = [
    {
      title: 'Vagas em Destaque',
      description: 'Encontre as melhores oportunidades de trabalho em empresas de todo o Brasil.',
      icon: 'assets/icon/job.svg'
    },
    {
      title: 'Currículo Online',
      description: 'Crie e gerencie seu currículo profissional de forma simples e eficiente.',
      icon: 'assets/icon/resume.svg'
    },
    {
      title: 'Empresas Parceiras',
      description: 'Conecte-se com empresas reconhecidas e amplie suas oportunidades profissionais.',
      icon: 'assets/icon/company.svg'
    }
  ];
}
