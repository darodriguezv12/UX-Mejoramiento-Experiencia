import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';

@Component({
  selector: 'app-confirmacion',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './confirmacion.html',
  styleUrl: './confirmacion.scss'
})
export class ConfirmacionComponent {}
