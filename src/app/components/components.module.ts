import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Input, OnInit } from '@angular/core';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {

  @Input() titol: string;
  @Input() bgcolor: string;

  constructor() { }

  ngOnInit() {}
 }
