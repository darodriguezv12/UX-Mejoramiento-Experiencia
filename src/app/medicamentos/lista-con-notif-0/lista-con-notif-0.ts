import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';

@Component({
  selector: 'app-lista-con-notif-0',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './lista-con-notif-0.html',
  styleUrl: './lista-con-notif-0.scss'
})
export class ListaConNotif0Component {}
