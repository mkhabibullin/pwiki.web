import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatGridListModule, MatChipsModule, MatToolbarModule,
  MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatGridListModule, MatChipsModule, MatToolbarModule, MatInputModule],
  exports: [MatButtonModule, MatCardModule, MatGridListModule, MatChipsModule, MatToolbarModule, MatInputModule],
})
export class MaterialModule { }
