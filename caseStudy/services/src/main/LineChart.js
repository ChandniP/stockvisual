import React from 'react';
import Highcharts from 'highcharts';
//jnjk
class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.highchartsOptions = {
      title: {
        text: props.dataOne.name,
        text: props.dataTwo.name
      },
      xAxis: {
        categories: props.dataTwo.dailyClosePrice
      },
      yAxis: {
        title: {
          text: 'Daily Close Price'
        }
      },
      series: [{
        name: props.dataOne.name,
        marker: {
          symbol: 'square'
        },
        data: props.dataOne

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
