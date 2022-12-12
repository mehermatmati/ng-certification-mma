import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BoldSpanPipe } from './pipes/bold-span.pipe';
import { SaveButtonStatesComponent } from './components/save-button-states/save-button-states.component';
import { TempSpanPipe } from './pipes/temp.span.pipe';



@NgModule({
  declarations: [BoldSpanPipe, TempSpanPipe, SaveButtonStatesComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    HttpClientModule,
    BoldSpanPipe,
    TempSpanPipe,
    SaveButtonStatesComponent
  ]
})
export class SharedModule { }
