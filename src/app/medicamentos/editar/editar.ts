import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './editar.html',
  styleUrl: './editar.scss'
})
export class EditarComponent {
  constructor(private location: Location) {}
  goBack() { this.location.back(); }
}
