import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      screen: 0
    }
  }

  // componentDidMount() {
  //   setInterval(this.increaseOnClick, 100);
  // }

  increaseOnClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    })
  };

  decreaseOnClick = () => {
    this.setState({
      clicks: Math.max(this.state.clicks - 1, 0)
    })
  };

  eraseOnClick = () => {
    this.setState({
      screen: 0
    })
  };

  onNumberClick = (e) => {
    
    if (this.state.screen == 0) {
      if (e.target.innerHTML === '.') {
        this.setState({
          screen: this.state.screen + e.target.innerHTML
        })
      } else {
        this.setState({
          screen: e.target.innerHTML
        })
      }
    } else if (this.state.screen.includes('.') && e.target.innerHTML === '.') {
        this.setState({
          screen: this.state.screen
        })
    } else {
      this.setState({
        screen: this.state.screen + e.target.innerHTML
      })
    }
  };

  onOperatorClick = (e) => {
    const lastChar = this.state.screen.slice(-1)

    if (lastChar != e.target.innerHTML) {
      if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        this.setState({
          screen: this.state.screen.slice(0, -1) + e.target.innerHTML
        })
      } else {
        this.setState({
          screen: this.state.screen + e.target.innerHTML
        })
      }
    }
  };

  onCClick = () => {

    if (this.state.screen.length > 1){
      this.setState({
        screen: this.state.screen.slice(0, -1)
      })
    } else {
      this.setState({
        screen: 0
      })
    }
  };

  onEqualClick = (e) => {
    let result;

    try {
      result = eval(this.state.screen);
    } catch (e) {
      result = '0';
      alert('Invalid Input');
    }
    
    this.state.screen = result.toString();

    this.setState({
      screen: this.state.screen
    })
  };


  render() {
    return (
      <div id="app">
        <div id="calculator">
          <div id="screen">{this.state.screen}</div>
          <div className='row'>
            <button className="wide-button" onClick={this.eraseOnClick}>AC</button>
            <button className="button" onClick={this.onCClick}>C</button>
            <button className="button" onClick={this.onOperatorClick}>/</button>
          </div>
          <div className='row'>
            <button className="button" onClick={this.onNumberClick}>7</button>
            <button className="button" onClick={this.onNumberClick}>8</button>
            <button className="button" onClick={this.onNumberClick}>9</button>
            <button className="button" onClick={this.onOperatorClick}>*</button>
          </div>
          <div className='row'>
            <button className="button" onClick={this.onNumberClick}>4</button>
            <button className="button" onClick={this.onNumberClick}>5</button>
            <button className="button" onClick={this.onNumberClick}>6</button>
            <button className="button" onClick={this.onOperatorClick}>-</button>
          </div>
          <div className='row'>
            <button className="button" onClick={this.onNumberClick}>1</button>
            <button className="button" onClick={this.onNumberClick}>2</button>
            <button className="button" onClick={this.onNumberClick}>3</button>
            <button className="button" onClick={this.onOperatorClick}>+</button>
          </div>
          <div className='row'>
            <button className="button" onClick={this.onNumberClick}>0</button>
            <button className="button" onClick={this.onNumberClick}>.</button>
            <button className="wide-button" onClick={this.onEqualClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
