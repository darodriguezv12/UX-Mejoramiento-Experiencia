import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';

@Component({
  selector: 'app-lista-sin-notif-1',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './lista-sin-notif-1.html',
  styleUrl: './lista-sin-notif-1.scss'
})
export class ListaSinNotif1Component {}
