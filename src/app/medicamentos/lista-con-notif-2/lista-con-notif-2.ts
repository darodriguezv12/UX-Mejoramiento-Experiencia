import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';

@Component({
  selector: 'app-lista-con-notif-2',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './lista-con-notif-2.html',
  styleUrl: './lista-con-notif-2.scss'
})
export class ListaConNotif2Component {}
