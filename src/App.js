import React from 'react';
import './App.css';
import SearchPanel from './components/SearchPanel.js'
import SearchResults from './components/SearchResults.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      meteorites_arr: [] 
    };
    this.apiCall=this.apiCall.bind(this);
    this.handleNewState=this.handleNewState.bind(this);
    this.refreshMeteorites=this.refreshMeteorites.bind(this);
  }

  apiCall() {
    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
      .then(response => response.json())
      .then(data => this.setState({meteorites_arr: data}))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.apiCall()
  }

  refreshMeteorites() {
    this.apiCall()
  }

  handleNewState(someValue) {
    this.setState({
      meteorites_arr: someValue
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Meteorite Explorer</h1>
        <SearchPanel  meteorites_arr={this.state.meteorites_arr} apiCall={this.apiCall} 
        handleNewState = {this.handleNewState} refreshMeteorites={this.refreshMeteorites}/>
        <SearchResults meteorites_arr={this.state.meteorites_arr}/>
      </div>
    );
  }
  
}

export default App;
