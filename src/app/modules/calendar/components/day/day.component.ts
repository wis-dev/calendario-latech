import { Component, Inject } from '@angular/core';
import { MonthComponent } from '../month/month.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {

  get dayName(): string {
    return moment(`${this.data.year}-${this.data.month}-${this.data.day}`).format('dddd');
  }

  categories: string[];
  selectedCategories: string[];
  addingCategories: boolean;
  categoriesControl = new FormControl();

  constructor(
    public dialogRef: MatDialogRef < MonthComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.categories = this.data.categories;
    this.selectedCategories = this.getSelectedCategories();
    this.addingCategories = false;
  }

  getSelectedCategories(): string[] {
    let categories: any = localStorage.getItem(`${this.data.year}-${this.data.month}-${this.data.day}`);
    categories = categories ? categories.split(',') : [];

    return categories.filter((category: any) => this.categories.includes(category));
  }

  assingCategory(): void {

    let categories: any = localStorage.getItem(`${this.data.year}-${this.data.month}-${this.data.day}`);
    categories = categories ? categories.split(',') : [];

    if (categories) {
      this.categoriesControl.setValue(categories);
    }

    this.addingCategories = true;
  }

  onAddCategories(): void {
    localStorage.setItem(`${this.data.year}-${this.data.month}-${this.data.day}`, this.categoriesControl.value);
    this.selectedCategories = this.getSelectedCategories();
    this.onCancelForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCancelForm(): void {
    this.addingCategories = false;
    this.categoriesControl.reset();
  }

}
