import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';

@Component({
  selector: 'app-eliminar-3',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './eliminar-3.html',
  styleUrl: './eliminar-3.scss'
})
export class Eliminar3Component {}
