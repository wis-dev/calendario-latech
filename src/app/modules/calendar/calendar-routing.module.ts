import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CalendarLayoutComponent } from './pages/calendar-layout/calendar-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
