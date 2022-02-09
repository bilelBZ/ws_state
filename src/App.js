import "./App.css";
import Counter from "./Components/Counter";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: true,
    };
  }
  toogleVisibility = () => this.setState({ isShow: !this.state.isShow });
  render() {
    console.log("rendering");
    return (
      <div className="App">
        <h1>counter</h1>
        <button onClick={this.toogleVisibility}>click</button>
        {this.state.isShow && <Counter />}
      </div>
    );
  }
}

export default App;
