import React, { Component } from "react";
import { ThemeContext } from './App'

export default class CounterClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount
    }
  }

  render() {
    console.log("render counter")
    return (
      <ThemeContext.Consumer>
        {style => (
      <div>
        <button style={style}  onClick={()=>{this.changeCount(-1)}} className="button">-</button>
        <span>{this.state.count}</span>
        <button style={style} onClick={()=>{this.changeCount(+1)}}>+</button>
      </div>
          )}
      </ThemeContext.Consumer>
    );
  }

  changeCount(amount){
    this.setState({count: this.state.count + amount})
  }
}
