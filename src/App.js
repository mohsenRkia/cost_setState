import "./App.css";
import Cost from "./components/Cost";
import AddNewItem from "./components/AddNewItem";

import React, { Component } from "react";
const data = [
  { id: 1, type: "laptop apple", amount: 3000 },
  { id: 2, type: "laptop asus", amount: 2000 },
  { id: 3, type: "laptop lenovo", amount: 300 },
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: data
    };
  }


  render() {
    const addNewItemHandler = (newItem) => {
      console.log(this.state.product)
      this.setState({
        product : [...this.state.product, { ...newItem, id: this.state.product.length + 1 }]
      })
    }

    return (
      <div className="App">
        {
          this.state.product.map((item) => {
            return <Cost key={item.id} arg={item} />;
          })
        }

        <AddNewItem addItemFunc={addNewItemHandler} />
      </div>
    );
  }
}

export default App;
