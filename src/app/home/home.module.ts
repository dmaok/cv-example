import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadModule } from 'src/app/containers/head/head.module';

import { HomeRouting } from './home.routing';
import { HomeComponent } from './home.component';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { ContactsModule } from 'src/app/shared/contacts/contacts.module';
import { SkillsModule } from 'src/app/shared/skills/skills.module';
import { SkillsChartModule } from 'src/app/containers/skills-chart/skills-chart.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HeadModule,
    HomeRouting,
    CommonModule,
    LayoutModule,
    ContactsModule,
    SkillsModule,
    SkillsChartModule
  ]
})
export class HomeModule {}
