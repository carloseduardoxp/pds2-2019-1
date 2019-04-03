import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteCrudComponent } from './cliente-crud/cliente-crud.component';

const CLIENTES_ROUTES: Routes = [
  { path: '', component: ClienteCrudComponent, children: [
    { path: ':id', component: ClienteFormComponent }
   ] },
];

export const clientesRouting = RouterModule.forChild(CLIENTES_ROUTES);
