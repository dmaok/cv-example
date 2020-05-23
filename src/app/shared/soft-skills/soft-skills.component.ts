import { Component, Input } from '@angular/core';
import { SoftSkills } from '@models/soft-skills/soft-skills';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss']
})
export class SoftSkillsComponent {
  @Input() performanceEvaluation: SoftSkills[] = [];
}
