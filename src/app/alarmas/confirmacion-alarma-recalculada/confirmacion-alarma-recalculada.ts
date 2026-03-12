import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';

@Component({
  selector: 'app-confirmacion-alarma-recalculada',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './confirmacion-alarma-recalculada.html',
  styleUrl: './confirmacion-alarma-recalculada.scss'
})
export class ConfirmacionAlarmaRecalculadaComponent {}
