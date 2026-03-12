import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'alarmas', pathMatch: 'full' },
  {
    path: 'alarmas',
    loadComponent: () => import('./alarmas/lista-alarmas-sin-notificacion/lista-alarmas-sin-notificacion')
      .then(m => m.ListaAlarmasSinNotificacionComponent)
  },
  {
    path: 'alarmas/recalcular',
    loadComponent: () => import('./alarmas/lista-alarmas-notificacion-recalcular/lista-alarmas-notificacion-recalcular')
      .then(m => m.ListaAlarmasNotificacionRecalcularComponent)
  },
  {
    path: 'alarmas/confirmacion',
    loadComponent: () => import('./alarmas/confirmacion-alarma-recalculada/confirmacion-alarma-recalculada')
      .then(m => m.ConfirmacionAlarmaRecalculadaComponent)
  },
  {
    path: 'alarmas/con-notificacion',
    loadComponent: () => import('./alarmas/lista-alarmas-con-notificacion/lista-alarmas-con-notificacion')
      .then(m => m.ListaAlarmasConNotificacionComponent)
  },
  { path: 'medicamentos', redirectTo: 'medicamentos/lista-2-sin-notif', pathMatch: 'full' },
  {
    path: 'medicamentos/lista-0-sin-notif',
    loadComponent: () => import('./medicamentos/lista-sin-notif-0/lista-sin-notif-0')
      .then(m => m.ListaSinNotif0Component)
  },
  {
    path: 'medicamentos/lista-1-sin-notif',
    loadComponent: () => import('./medicamentos/lista-sin-notif-1/lista-sin-notif-1')
      .then(m => m.ListaSinNotif1Component)
  },
  {
    path: 'medicamentos/lista-2-sin-notif',
    loadComponent: () => import('./medicamentos/lista-sin-notif-2/lista-sin-notif-2')
      .then(m => m.ListaSinNotif2Component)
  },
  {
    path: 'medicamentos/lista-0-con-notif',
    loadComponent: () => import('./medicamentos/lista-con-notif-0/lista-con-notif-0')
      .then(m => m.ListaConNotif0Component)
  },
  {
    path: 'medicamentos/lista-1-con-notif',
    loadComponent: () => import('./medicamentos/lista-con-notif-1/lista-con-notif-1')
      .then(m => m.ListaConNotif1Component)
  },
  {
    path: 'medicamentos/lista-2-con-notif',
    loadComponent: () => import('./medicamentos/lista-con-notif-2/lista-con-notif-2')
      .then(m => m.ListaConNotif2Component)
  },
  {
    path: 'medicamentos/lista-3',
    loadComponent: () => import('./medicamentos/lista-3/lista-3')
      .then(m => m.Lista3Component)
  },
  {
    path: 'medicamentos/eliminar-1',
    loadComponent: () => import('./medicamentos/eliminar-1/eliminar-1')
      .then(m => m.Eliminar1Component)
  },
  {
    path: 'medicamentos/eliminar-2',
    loadComponent: () => import('./medicamentos/eliminar-2/eliminar-2')
      .then(m => m.Eliminar2Component)
  },
  {
    path: 'medicamentos/eliminar-3',
    loadComponent: () => import('./medicamentos/eliminar-3/eliminar-3')
      .then(m => m.Eliminar3Component)
  },
  {
    path: 'medicamentos/editar',
    loadComponent: () => import('./medicamentos/editar/editar')
      .then(m => m.EditarComponent)
  },
  {
    path: 'medicamentos/crear',
    loadComponent: () => import('./medicamentos/crear/crear')
      .then(m => m.CrearComponent)
  },
  {
    path: 'medicamentos/confirmacion',
    loadComponent: () => import('./medicamentos/confirmacion/confirmacion')
      .then(m => m.ConfirmacionComponent)
  }
];
