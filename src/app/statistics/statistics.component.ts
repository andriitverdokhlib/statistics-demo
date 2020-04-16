import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  pieChartData: any[] = [
    {
      "name": "Male",
      "value": 65
    },
    {
      "name": "Female",
      "value": 35
    },
  ];

  multiChartData: any[] = [
    {
      "name": "19-25",
      "series": [
        {
          "name": "Male",
          "value": 10
        },
        {
          "name": "Female",
          "value": 5
        }
      ]
    },

    {
      "name": "26-30",
      "series": [
        {
          "name": "Male",
          "value": 25
        },
        {
          "name": "Female",
          "value": 10
        }
      ]
    },

    {
      "name": "31-40",
      "series": [
        {
          "name": "Male",
          "value": 46
        },
        {
          "name": "Female",
          "value": 27
        }
      ]
    },

    {
      "name": "41+",
      "series": [
        {
          "name": "Male",
          "value": 20
        },
        {
          "name": "Female",
          "value": 15
        }
      ]
    },
  ];

  singleChartData: any[]  = [
    {
      "name": "<2200€",
      "value": 500
    },
    {
      "name": "2200–4687,50€",
      "value": 2000
    },
    {
      "name": "4.687,60–6900€",
      "value": 500
    },
    {
      "name": ">6900€",
      "value": 125
    }
  ];

  getPercent(value: number): string {
    return `${value}%`;
  }
}
