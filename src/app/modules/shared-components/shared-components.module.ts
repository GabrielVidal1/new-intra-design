import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    ButtonModule,
    TabViewModule,
    TableModule,
    DropdownModule,
    FormsModule,
    MultiSelectModule,
    InputTextModule,
    InputNumberModule,
    ProgressSpinnerModule,
  ],
})
export class SharedComponentsModule { }
