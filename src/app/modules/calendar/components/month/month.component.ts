import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DayComponent } from '../day/day.component';
import * as moment from 'moment';

@Component({
  selector: 'app-month',
  template: `
  <div class="row">
    <div class="day-container" *ngFor="let day of daysArray">
      <button mat-icon-button class="m-1"  [ngClass]="{ 'active': isCurrentDay(day) }" (click)="onClickDay(day)">
        {{ day }}
      </button>
    </div>
  </div>
  `,
  styles: [
    `.active {
        background: rgba(255, 242, 5, 1);
        background: -moz-linear-gradient(left, rgba(255, 242, 5, 1) 0%, rgba(3, 251, 255, 1) 100%);
        background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255, 242, 5, 1)), color-stop(100%, rgba(3, 251, 255, 1)));
        background: -webkit-linear-gradient(left, rgba(255, 242, 5, 1) 0%, rgba(3, 251, 255, 1) 100%);
        background: -o-linear-gradient(left, rgba(255, 242, 5, 1) 0%, rgba(3, 251, 255, 1) 100%);
        background: -ms-linear-gradient(left, rgba(255, 242, 5, 1) 0%, rgba(3, 251, 255, 1) 100%);
        background: linear-gradient(to right, rgba(255, 242, 5, 1) 0%, rgba(3, 251, 255, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff205', endColorstr='#03fbff', GradientType=1);
        color: white;
      }
    `,
    `.day-container {
      flex: 0 0 auto;
      width: 14.28571428571429% !important;
    }
  `
  ]
})
export class MonthComponent {

  @Input() year: number;
  @Input() month: number;
  @Input() categories: string[];

  constructor(private dialog: MatDialog) { }

  get daysArray(): string[] {

    const monthIndex = this.month - 1;
    const date = new Date(this.year, monthIndex, 1);
    const result = [];

    while (date.getMonth() === monthIndex) {
      result.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }

    return result;
  }

  isCurrentDay(day: number): boolean {
    return moment(`${this.year}-${this.month}-${day}`).isSame(moment(), 'day');
  }

  onClickDay(day: number): void {
    this.dialog.open(DayComponent, {
      width: '350px',
      data: {
        categories: this.categories,
        year: this.year,
        month: this.month,
        day
      }
    });
  }

}
