import { Component } from '@angular/core';
import { Candidate } from 'src/app/models/candidate/candidate';
import { candidate, skillsList, contacts, skills } from 'src/app/mocks';
import { Contact } from 'src/app/models/contact/contact';
import { Skills } from 'src/app/models/skills/skills';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contacts: Contact[] = contacts;
  candidate: Candidate = candidate;
  technicalSkills: Skills[] = skills;
  personalSkillsList: string[] = skillsList;
}
