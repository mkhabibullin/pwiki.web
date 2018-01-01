import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatGridListModule, MatChipsModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatGridListModule, MatChipsModule, MatToolbarModule],
  exports: [MatButtonModule, MatCardModule, MatGridListModule, MatChipsModule, MatToolbarModule],
})
export class MaterialModule { }
