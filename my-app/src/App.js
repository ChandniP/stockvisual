// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
import React from 'react';
import companyInfo from './data/companyInfo';
import historicalStockData from './data/historicalStockData';
import LineChart from './components/LineChart'
import Card from './components/Card.js'
import './stylesheet.css';
import CardForm from './components/CardForm';
// import CardForm from './CardForm';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    company:historicalStockData[0].name,
    startdate:Object.keys(historicalStockData[0].dailyClosePrice[0])[0],
    enddate:Object.keys(historicalStockData[0].dailyClosePrice[0])[30],
  };
  // console.log(this.state.company)
 this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(company, startdate, enddate) {
  this.setState({
    company:company,
    startdate: startdate,
    enddate: enddate
    });
 // console.log("onsubmit "+this.state.startdate);
    
}



render () {
  // console.log(this.state.startdate);
  // console.log(this.state.enddate);
  return (
    <div>
      <CardForm onSubmit={this.handleSubmit} />
      <div id='left-panel'>
      <Card data={companyInfo[0]}/>
      <Card data={companyInfo[1]}/>            
          </div>
      <LineChart dataOne={companyInfo[0]} dataTwo={historicalStockData[0]} company={this.state.company} startdate={this.state.startdate} enddate={this.state.enddate} secondcompany={companyInfo[1]} seconddata={historicalStockData[1]}/>

    </div>
  );
}
}
export default App;



