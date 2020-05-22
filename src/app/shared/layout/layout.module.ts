import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    MainComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
    AsideComponent,
    MainComponent,
    SectionComponent
  ],
})
export class LayoutModule {}
