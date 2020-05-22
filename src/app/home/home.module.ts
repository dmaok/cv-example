import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadModule } from 'src/app/containers/head/head.module';

import { HomeRouting } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HeadModule,
    HomeRouting,
    CommonModule
  ]
})
export class HomeModule {}
