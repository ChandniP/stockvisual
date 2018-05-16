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

class App extends React.Component {
    render () {
        return (
        <div>
            <LineChart dataOne={companyInfo[0]} dataTwo={historicalStockData[0]} startdate="4/17/2018" enddate="5/5/2018" />
        </div>
        );
    }
}
export default App;

