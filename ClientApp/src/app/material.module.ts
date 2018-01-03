import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatGridListModule, MatChipsModule, MatToolbarModule,
  MatInputModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatGridListModule, MatChipsModule, MatToolbarModule, MatInputModule,
    MatIconModule],
  exports: [MatButtonModule, MatCardModule, MatGridListModule, MatChipsModule, MatToolbarModule, MatInputModule,
    MatIconModule],
})
export class MaterialModule { }
