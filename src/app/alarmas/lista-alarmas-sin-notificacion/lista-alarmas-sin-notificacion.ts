import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';

@Component({
  selector: 'app-lista-alarmas-sin-notificacion',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './lista-alarmas-sin-notificacion.html',
  styleUrl: './lista-alarmas-sin-notificacion.scss'
})
export class ListaAlarmasSinNotificacionComponent {}
