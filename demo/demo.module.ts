import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ZtocompModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, ZtocompModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}