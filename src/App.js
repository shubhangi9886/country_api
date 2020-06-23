import React, { Component } from 'react'
import SearchBar from './component/SearchBar';
import { BrowserRouter as Router, } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <SearchBar />
        </div>
      </Router>
    )
  }
}
export default App;