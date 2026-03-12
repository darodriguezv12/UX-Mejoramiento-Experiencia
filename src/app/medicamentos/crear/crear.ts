import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './crear.html',
  styleUrl: './crear.scss'
})
export class CrearComponent {
  constructor(private location: Location) {}
  goBack() { this.location.back(); }
}
