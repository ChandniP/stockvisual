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
    //console.log(data);
    this.highchartsOptions = {
      title: {
        text: props.dataOne.name
        // text: props.dataTwo.name
      },
      xAxis: {
        categories: Object.keys(ordered),
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
        data:Object.values(ordered)
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