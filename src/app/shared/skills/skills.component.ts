import { Component, Input, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skill: Skills;

  constructor() { }

  ngOnInit(): void {
  }

}
