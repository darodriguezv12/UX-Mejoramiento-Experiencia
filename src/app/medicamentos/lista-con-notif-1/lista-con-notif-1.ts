import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';

@Component({
  selector: 'app-lista-con-notif-1',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './lista-con-notif-1.html',
  styleUrl: './lista-con-notif-1.scss'
})
export class ListaConNotif1Component {}
