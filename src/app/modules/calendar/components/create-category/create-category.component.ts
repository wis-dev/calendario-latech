import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MonthComponent } from '../month/month.component';

@Component({
  selector: 'app-create-category',
  template: `
  <h1 mat-dialog-title>Crear categoría</h1>
  <form #form="ngForm" class="row" [formGroup]="categoryForm" (ngSubmit)="onSubmit()">
    <div class="col-12">
      <mat-form-field class="w-100" appearance="outline">
          <mat-label>Nombre</mat-label>
          <input matInput formControlName="name" type="text" name="categoría" minlength="2" maxlength="20" placeholder="Ej. Feriado">
          <mat-icon matSuffix>bookmark</mat-icon>
          <mat-error *ngIf="categoryForm.controls['name']?.errors?.required && categoryForm.controls['name'].touched" class="text-danger">Este campo es requerido</mat-error>
          <mat-error *ngIf="categoryForm.controls['name']?.errors?.minlength && categoryForm.controls['name'].touched" class="text-danger">Debe ingresar mínimo {{ categoryForm.controls['name'].errors.minlength.requiredLength }} caracteres</mat-error>
        </mat-form-field>
    </div>
    <div class="col-12 d-flex justify-content-end">
      <button mat-raised-button color="secondary" class="mr-2" type="button" (click)="onNoClick()">Cancelar</button>
      <button mat-raised-button color="primary" type="submit" [disabled]="categoryForm.invalid">Guardar</button>
    </div>
  </form>`
})
export class CreateCategoryComponent {

  categoryForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef < MonthComponent > ,
    private formBuilder: FormBuilder
  ) {
    this._createForm();
  }

  private _createForm(): void {
    this.categoryForm = this.formBuilder.group({
      name: [null, this._getNameValidators()]
    });
  }

  private _getNameValidators(): any[] {
    return [Validators.required, Validators.minLength(2), Validators.maxLength(20)];
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      this.dialogRef.close(this.categoryForm.value.name);
    }
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
