import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';

@Component({
  selector: 'app-eliminar-1',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './eliminar-1.html',
  styleUrl: './eliminar-1.scss'
})
export class Eliminar1Component {}
