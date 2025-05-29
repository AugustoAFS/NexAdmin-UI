import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-curriculos',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './curriculos.component.html',
  styleUrl: './curriculos.component.scss'
})
export class CurriculosComponent {

}
