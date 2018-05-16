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
// import CardForm from './CardForm';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {};
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(author, message) {
  // const newCard = {author: author, dateStamp: dateStamp};
  // const cards = [...this.state.cards, newCard];
  // this.setState({cards: cards});
}
    render () {
        return (
        <div>
          {/* <CardForm onSubmit={this.handleSubmit} /> */}
          <Card data={companyInfo[0]}/>
            <LineChart dataOne={companyInfo[0]} dataTwo={historicalStockData[0]} startdate="4/17/2018" enddate="5/5/2018" />

        </div>
        );
    }
}
export default App;
// constructor(props) {
//   super(props);
//   this.state = {};
//   this.handleSubmit = this.handleSubmit.bind(this);
// }
// handleSubmit(author, message) {
//   const newCard = {author: author, dateStamp: dateStamp};
//   const cards = [...this.state.cards, newCard];
//   this.setState({cards: cards});
// }
// render() {
//   return (
//     <div className="App">
//       <CardForm onSubmit={this.handleSubmit} />
//       <Card/>
//     </div>
//   );
// }

