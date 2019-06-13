import React from 'react';
import './App.css';
import superagent from 'superagent'


class App extends React.Component {
  state={
    dogs: []
  }
  componentDidMount(){
    superagent.get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const dogs = response.body.message
        console.log(dogs)
      })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    )
  }
}

export default App;
