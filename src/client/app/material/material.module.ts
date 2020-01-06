import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [CommonModule, MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule],
  declarations: [],
  exports: [MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule]
})
export class MaterialModule {}
