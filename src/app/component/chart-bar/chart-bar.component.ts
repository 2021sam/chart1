// AUGUST 23, 2022
// https://www.freecodecamp.org/news/how-to-make-bar-and-line-charts-using-chartjs-in-angular/

import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
//or
// import { Chart } from 'chart.js';


enum Chart_Types {
  BAR = 'bar',
  LINE = 'line',
  PIE = 'pie'
};


@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})

export class ChartBarComponent implements OnInit {
  public chart: any;
  public click_message: string;
  public chart_type = 'bar';


  constructor()
  {
    this.click_message = 'Constructor';
  }


  clickMessage(type: Chart_Types)
   {
    // throw new Error('Method not implemented.');
    console.log(type);
    // this.click_message = type;
    // console.log( this.chart );
    this.chart.destroy();
    // let x = Chart_Types.LINE;
    // console.log(typeof x);
    // this.createChart(Chart_Types.LINE);
    this.createChart( type );
  }


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.createChart(Chart_Types.BAR);
    this.click_message = '.';
  }

  set_chart_line()
  {
    this.chart.destroy();
    this.createChart( Chart_Types.LINE );
  }

  set_chart_bar()
  {
    this.chart.destroy();
    this.createChart( Chart_Types.BAR );
  }


  createChart(chart_type: Chart_Types)
  {
    this.chart = new Chart("MyChart", {
      type: chart_type,
      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
    });

    console.log( this.chart );
  }

}
