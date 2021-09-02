import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  Highcharts= Highcharts;
  chartOptions={};
  constructor() { }

  ngOnInit() {
    this.chartOptions=  {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderwidth:0,
          margin:[2,2,2,2],
          height : 60

      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      
      tooltip: {
          split: true,
         outside:true
      },
      legend:{
        enabled : false,
      },
      credits:{
        enabled : false,
      },
    exporting : {
      enabled : false,
    },
    xAxis: {
      labels: {
        enabled: false,
      },
      title : {
        Text:null
      },
    startOnTick:false,
    endOnTick: false,
    tickOptions :[] },
    yAxis: {
      labels: {
        enabled: false,
      },
      title : {
        Text:null
      },
    startOnTick:false,
    endOnTick: false,
    tickOptions :[] },
    

    
      
      series: [{
        data: [2,3,5]
      }]
  };
  HC_exporting(Highcharts);
  setTimeout(()=>{
  window.dispatchEvent(
    new Event('resize')
  );
  
  },300)
  }

}
