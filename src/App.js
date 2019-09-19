import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    input: ''
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <p>Type here : </p>
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        <h3>{this.state.input}</h3>
      </div>
    );
  }
}

export default App;
