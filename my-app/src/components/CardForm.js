import React from 'react';
import TextInput from './TextInput.js';
//import Select from 'react-select';

class CardForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {company: '', startdate: '', enddate: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleStartdateChange = this.handleStartdateChange.bind(this);
        this.handleEnddateChange = this.handleEnddateChange.bind(this);

    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.company, this.state.startdate, this.state.enddate);
      }

    handleCompanyChange(value) {
        this.setState({company: value});

    }

    handleStartdateChange(value) {
        this.setState({startdate: value});

    }

    handleEnddateChange(value){ 
        this.setState({enddate: value});
    }

    render() {
        return (
          <div className='card-form'>
            {/* <h2>Choose a Company</h2> */}
            <TextInput name='company' label='Company' value={this.state.company} onChange={this.handleCompanyChange}/>
            <TextInput name='startdate' label='Start Date' value={this.state.startdate} onChange={this.handleStartdateChange}/>
            <TextInput name='enddate' label='End Date' value={this.state.enddate} onChange={this.handleEnddateChange}/>
            <button className='btn btn-primary' type="submit" onClick={this.handleSubmit}>Submit</button>
          </div>
        );
    }
}

export default CardForm;