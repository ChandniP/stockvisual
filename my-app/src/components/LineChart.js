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
    this.startDate = props.startdate;
    this.endDate=props.enddate;
    const neworder={};
    Object.keys(ordered).forEach(function(key){
      var d1 = new Date(props.startdate);
      var d2 = new Date(props.enddate);
      var d3 = new Date(key);
      if (d1 <= d3 && d3 <= d2){
        neworder[key]=ordered[key];
      }
    })
    this.highchartsOptions = {
      title: {
        text: props.dataOne.name
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
      }]
    }
  }

  componentDidMount() {
    Highcharts.chart('chart', this.highchartsOptions);
  }

  render() {
    return <div id='chart'></div>
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

}

export default LineChart;