import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsChartComponent } from './skills-chart.component';



@NgModule({
  declarations: [
    SkillsChartComponent
  ],
  exports: [
    SkillsChartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SkillsChartModule {}
