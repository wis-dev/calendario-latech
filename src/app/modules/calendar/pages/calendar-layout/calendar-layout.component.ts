import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatAccordion } from '@angular/material/expansion';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryComponent } from '@modules/calendar/components/create-category/create-category.component';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-layout',
  templateUrl: './calendar-layout.component.html',
  styleUrls: ['./calendar-layout.component.css']
})
export class CalendarLayoutComponent implements AfterViewInit {

  get months(): string[] {
    moment.locale('ES');
    return moment.months();
  }

  @ViewChild(MatAccordion) accordion: MatAccordion;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  year: number;
  categories: string[];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog
  ) {
    this.year = (new Date()).getFullYear();
    this.categories = ['Vacaciones', 'Trabajo'];
  }

  ngAfterViewInit(): void {
    if (window.innerWidth <= 768) {
      this.accordion.closeAll();
    } else {
      this.accordion.openAll();
    }
  }

  addCategory(): void {
    const dialogRef = this.dialog.open(CreateCategoryComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categories.push(result);
      }
    });
  }

  deleteCategory(index: number): void {
    this.categories.splice(index, 1);
  }

}
