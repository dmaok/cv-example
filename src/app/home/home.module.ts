import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadModule } from '@containers/head/head.module';
import { LayoutModule } from '@shared/layout/layout.module';
import { ContactsModule } from '@shared/contacts/contacts.module';
import { SoftSkillsModule } from '@shared/soft-skills/soft-skills.module';
import { SkillsChartModule } from '@containers/skills-chart/skills-chart.module';

import { HomeRouting } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HeadModule,
    HomeRouting,
    CommonModule,
    LayoutModule,
    ContactsModule,
    SkillsChartModule,
    SoftSkillsModule
  ]
})
export class HomeModule {}
