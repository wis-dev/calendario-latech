import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CalendarLayoutComponent } from './pages/calendar-layout/calendar-layout.component';
import { MaterialModule } from './material.module';

// Utilities
import { SliceTextPipe } from '@shared/pipes/slice-text.pipe';

// Components
import { MonthComponent } from './components/month/month.component';
import { DayComponent } from './components/day/day.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';


@NgModule({
  declarations: [
    CalendarLayoutComponent,
    MonthComponent,
    DayComponent,
    CreateCategoryComponent,
    SliceTextPipe
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ]
})
export class CalendarModule { }
