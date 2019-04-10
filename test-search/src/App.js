import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    searchList: [],
    searchCount: 0
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const { array } = e.target;
    const { integer } = e.target;
    
    console.log(array.value);

    // this.linear(array.value, integer.value)
    this.binary(array.value, integer.value)

  }

  linear(strArray, value) {

    const array = strArray.split(' ');

    for (let i = 0; i < array.length; i++) {
      this.setState({
        searchList: this.state.searchList.push(array[i]),
        searchCount: this.state.searchList.length,
      });
      if (array[i] == value) {
        return i;
      }
    }
    return -1;
  }

  binary(array, value, start=0, end=array.length-1) {
    
    if (start > end) return -1;
    
    let index = Math.floor((start + end) / 2);
    let item = array[index];

    this.setState({
      searchList: this.state.searchList.push(item),
      searchCount: this.state.searchList.length,
    });
    
    if (item === value) {
      return index;
    }
    else if (item < value) {
      return this.binary(array, value, index + 1, end);
    }
    else if (item > value) {
      return this.binary(array, value, start, index - 1);
    }
  }

  // componentDidUnmount() {
  //   this.setState({
  //     searchList : [],
  //     searchCount: 0
  //   });
  // }


  render() {
    let content = <div className="App">
                    <header className="App-header">
                      <p>
                        Edit <code>src/App.js</code> and save to reload.
                      </p>
                    </header>
                    <form className="search-form" onSubmit={(e) => this.handleSubmit(e)}>
                      <input type="text" name="array" placeholder="array for search"></input><br/>
                      <input type="number" name="integer" placeholder="number you're looking for"></input><br/>
                      <button type="submit">Submit</button>
                    </form><br/>
                    <div className="search-results">
                      <p>This is our search list: <b>{this.state.searchList}</b></p><br/>
                      <p>It took <b>{this.state.searchCount}</b> searches to find the target number</p>
                    </div>
                  </div>
    
    return (
      <>
      {content}
      </>
    );
  }
}

export default App;
