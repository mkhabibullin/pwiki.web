import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatGridListModule, MatChipsModule, MatToolbarModule,
  MatInputModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatAutocompleteModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatGridListModule, MatChipsModule, MatToolbarModule, MatInputModule,
    MatIconModule, MatDialogModule, MatFormFieldModule, MatAutocompleteModule ],
  exports: [MatButtonModule, MatCardModule, MatGridListModule, MatChipsModule, MatToolbarModule, MatInputModule,
    MatIconModule, MatDialogModule, MatFormFieldModule, MatAutocompleteModule ],
})
export class MaterialModule { }
