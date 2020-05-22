import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import Chart, { ChartConfiguration, ChartData, ChartOptions, ChartTooltipItem } from 'chart.js';
import { ChartJsService } from 'src/app/services/chart-js.service';
import { Skills } from 'src/app/models/skills/skills';

@Component({
  selector: 'app-skills-chart',
  templateUrl: './skills-chart.component.html',
  styleUrls: ['./skills-chart.component.scss'],
  providers: [ChartJsService]
})
export class SkillsChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('canvasElement') private canvasElement: ElementRef<HTMLCanvasElement>;

  @Input() skills: Skills[] = [];

  private chartInstance: Chart;

  constructor(private chartJsService: ChartJsService) { }

  ngAfterViewInit(): void {
    const chartOptions: ChartOptions = {
      responsive: true,
      tooltips: {
        intersect: false,
        callbacks: {
          title: () => '',
          label: (tooltipItem: ChartTooltipItem, data: ChartData): string => {
            return data.datasets[tooltipItem.datasetIndex]?.label;
          }
        }
      },
      scales: {
        xAxes: [{
          type: 'time',
          ticks: {
            min: new Date('2015-10-01')
          },
          offset: true,
          distribution: 'linear',
          scaleLabel: {
            display: true,
            labelString: 'Work Experience'
          }
        }],
        yAxes: [{
          display: false
        }]
      }
    }
    const chartConfiguration: ChartConfiguration = {
      type: 'line',
      data: {
        datasets: this.skills.map(skill => this.chartJsService.convertSkillToChart(skill))
      },
      options: chartOptions
    };

    this.chartInstance = new Chart(this.canvasElement.nativeElement, chartConfiguration);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.applySkills();
  }

  private applySkills() {
    if(!this.chartInstance) return;

    this.skills.forEach(skill => {
      this.chartInstance.data.datasets.push(this.chartJsService.convertSkillToChart(skill));
    });
  }
}
