import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateAreaPage } from './private-area.page';

const routes: Routes = [
  {
    path: '',
    component: PrivateAreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateAreaPageRoutingModule {}
