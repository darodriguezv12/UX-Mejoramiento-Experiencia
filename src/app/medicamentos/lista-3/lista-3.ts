import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav';

@Component({
  selector: 'app-lista-3',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './lista-3.html',
  styleUrl: './lista-3.scss'
})
export class Lista3Component {}
