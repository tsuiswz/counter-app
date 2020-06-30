import React from 'react';
import Counters from './counters';
import { Component } from 'react';

class Cart extends Component {
  render() {
    console.log("Cart - Rendered");

    const {
      counters,
      onReset,
      onIncrement,
      onDecrement,
      onDelete,
    } = this.props;

    return (
    <div>
      <h1>Cart Page</h1>
      <Counters
        onReset={onReset}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
        counters={counters}
      />
    </div>
  )
  }
  
}

export default Cart;