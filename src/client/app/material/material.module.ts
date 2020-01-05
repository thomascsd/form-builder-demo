import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [CommonModule, MatSnackBarModule, MatTableModule],
  declarations: [],
  exports: [MatSnackBarModule]
})
export class MaterialModule {}
