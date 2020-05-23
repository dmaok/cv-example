import { Component } from '@angular/core';
import { candidate, performanceEvaluation, contacts, skills } from '@mocks/index';

import { Skills } from '@models/skills/skills';
import { Contact } from '@models/contact/contact';
import { Candidate } from '@models/candidate/candidate';
import { SoftSkills } from '@models/soft-skills/soft-skills';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contacts: Contact[] = contacts;
  candidate: Candidate = candidate;
  technicalSkills: Skills[] = skills;
  performanceEvaluation: SoftSkills[] = performanceEvaluation;

  get candidateAge(): number {
    if (!this.candidate?.birthday) return undefined;
    const msInYear = 1000 * 60 * 60 * 24 * 365;
    const msDiff = new Date().getTime() - new Date(this.candidate.birthday).getTime();
    return Math.floor(msDiff / msInYear);
  }
}
