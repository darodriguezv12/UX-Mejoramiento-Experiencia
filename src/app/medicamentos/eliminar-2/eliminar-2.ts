import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';

@Component({
  selector: 'app-eliminar-2',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './eliminar-2.html',
  styleUrl: './eliminar-2.scss'
})
export class Eliminar2Component {}
