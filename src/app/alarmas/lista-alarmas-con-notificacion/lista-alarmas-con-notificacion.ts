import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';

@Component({
  selector: 'app-lista-alarmas-con-notificacion',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './lista-alarmas-con-notificacion.html',
  styleUrl: './lista-alarmas-con-notificacion.scss'
})
export class ListaAlarmasConNotificacionComponent {
  showToast = signal(true);
}
