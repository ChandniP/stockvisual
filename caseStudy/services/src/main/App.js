import React from 'react';
import companyInfo from './data/companyInfo';
import historicalStockData from './data/historicalStockData';
import LineChart from './components/LineChart'

class App extends React.Component {
    render () {
        return (
        <div>
            <LineChart dataOne={companyInfo} dataTwo={historicalStockData} />
        </div>
        );
    }
}
export default App;
