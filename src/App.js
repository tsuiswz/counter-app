import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Shop from "./components/shop";
import Cart from "./components/cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleReset = () => {
    console.log("Reset Event Called");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    console.log("Increment Event Called");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    console.log("Decrement Event Called");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value =
      counters[index].value <= 0 ? 0 : counters[index].value - 1;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Delete Event Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <Router>
        <div className="App">
          <NavBar
            totalCounters={
              this.state.counters.filter((c) => c.value > 0).length
            }
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart">
              <Cart
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                counters={this.state.counters}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
