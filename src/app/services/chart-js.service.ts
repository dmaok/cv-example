import { Injectable } from '@angular/core';
import { Skills } from 'src/app/models/skills/skills';
import { ChartDataSets } from 'chart.js';

@Injectable()
export class ChartJsService {

  convertSkillToChart(skill: Skills): ChartDataSets {
    const finishZIndex = skill.finishDate ? 0 : skill.zIndex;
    const finish: Date = skill.finishDate || new Date();
    const midDate = new Date((skill.startDate.getTime() + finish.getTime()) / 2);

    return {
      label: skill.name,
      fill: false,
      borderColor: skill.color,
      backgroundColor: skill.color,
      pointBorderWidth: [2, 5, 2],
      hideInLegendAndTooltip: true,
      data: [
        {
          x: skill.startDate,
          y: 0
        }, {
          x: midDate,
          y: skill.zIndex
        }, {
          x: finish,
          y: finishZIndex
        }
      ]
    }
  }
}
