import React from 'react';
import Highcharts from 'highcharts';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    const unordered=props.dataTwo.dailyClosePrice[0];
    const ordered={};
    Object.keys(unordered).sort().forEach(function(key) {
      ordered[key] = unordered[key];
    });
    const neworder={};
    Object.keys(ordered).forEach(function(key){
      var d1 = new Date(props.startdate);
      var d2 = new Date(props.enddate);
      var d3 = new Date(key);
      if (d1 <= d3 && d3 <= d2){
        neworder[key]=ordered[key];
      }
    });

    const unordered2=props.seconddata.dailyClosePrice[0];
    const ordered2={};
    Object.keys(unordered2).sort().forEach(function(key) {
      ordered2[key] = unordered2[key];
    });
    const neworder2={};
    Object.keys(ordered2).forEach(function(key){
      var d1 = new Date(props.startdate);
      var d2 = new Date(props.enddate);
      var d3 = new Date(key);
      if (d1 <= d3 && d3 <= d2){
        neworder2[key]=ordered2[key];
      }
    });


    this.highchartsOptions = {
      title: {
        text: "Stock Visualization" 
      },
      xAxis: {
        categories: Object.keys(neworder),
      },
      yAxis: {
        title: {
          text: 'Daily Close Price'
        }
      },
      series: [{
        // name:Object.keys(props.dataTwo.dailyClosePrice[0]),
        name:props.dataOne.name,
        marker: {
          symbol: 'square'
        },
        // data: props.dataTwo.dailyClosePrice[props.dataTwo.dailyClosePrice.keys()]
        data:Object.values(neworder)
      },
      {
        // name:Object.keys(props.dataTwo.dailyClosePrice[0]),
        name:props.secondcompany.name,
        marker: {
          symbol: 'square'
        },
        // data: props.dataTwo.dailyClosePrice[props.dataTwo.dailyClosePrice.keys()]
        data:Object.values(neworder2)
      }]
    }
  }

  componentDidMount() {
    Highcharts.chart('chart', this.highchartsOptions);
  }

  render() {
    return <div id='chart'></div>
  }


}

export default LineChart;