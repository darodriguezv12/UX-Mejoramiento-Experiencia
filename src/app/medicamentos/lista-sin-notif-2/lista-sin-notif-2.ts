import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';

@Component({
  selector: 'app-lista-sin-notif-2',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './lista-sin-notif-2.html',
  styleUrl: './lista-sin-notif-2.scss'
})
export class ListaSinNotif2Component {}
