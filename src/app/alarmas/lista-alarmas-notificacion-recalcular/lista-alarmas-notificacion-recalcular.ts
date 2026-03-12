import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';

@Component({
  selector: 'app-lista-alarmas-notificacion-recalcular',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './lista-alarmas-notificacion-recalcular.html',
  styleUrl: './lista-alarmas-notificacion-recalcular.scss'
})
export class ListaAlarmasNotificacionRecalcularComponent {
  abrirFecha(event: MouseEvent) {
    const input = (event.currentTarget as HTMLElement).querySelector('input');
    if (input) (input as any).showPicker();
  }
}
