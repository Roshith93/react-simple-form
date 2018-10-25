import React, { Component } from 'react';
import './App.css';
import Form from './components/Forms'

class App extends Component {
  state = {
    fields : {}
  }
  formData = values => {
    console.log("Form Details", values);
    this.setState({
      fields : {
        ...this.state.fields,
        ...values
      }
    })
  }
  render() {
    return (
      <div className="App">
        <Form liveChange={this.formData}/>
        <p>{JSON.stringify(this.state.fields,null,2)}</p>
      </div>
    );
  }
}

export default App;
