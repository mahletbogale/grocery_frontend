import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Header/Header";
import VegetableList from "../Vegetable/VegetableList";
import VegetableDetails from "../Vegetable/VegetableDetails";
import FruitDetails from "../Fruit/FruitDetails";
import FruitList from "../Fruit/FruitList";
import { Link, Switch } from "react-router-dom";
import Carts from "../Carts/Carts";
import Search from "../Search/Search";
import Pay from "../Pay/Pay";
import { APIURL } from "../config";
class App extends Component {
  constructor() {
    super();
    this.state = {
      fruits: [],
      selectedFruit: null,
      selectedVeg: null,
      carts: [],
      cartPrice: [],
      vegetables: [],
      filteredItemVeg: [],
      filteredItemFruit: [],
      qty: 0,
      total: 0,
      sortValue: "",
      count: 1,
      // inputValue: "",
      search: null,
      index: 0,
    };
  }
  componentDidMount() {
    // fetch(APIURL + "/fruits/")
    fetch("https://stark-anchorage-91434.herokuapp.com/fruits/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ fruits: json });
      })
      .catch(console.error);

    fetch("https://stark-anchorage-91434.herokuapp.com/vegetables/")
      // fetch(APIURL + "/vegetables/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ vegetables: json });
      })
      .catch(console.error);
  }
  incrementCount = (itemName) => {
    let updatedCarts = [...this.state.carts];
    for (let item of updatedCarts) {
      if (item.name === itemName) {
        item.count++;
      }
    }
    this.setState((prevState) => ({
      carts: updatedCarts,
      qty: prevState.qty + 1,
    }));
  };
  decrementCount = (itemName) => {
    let updatedCarts = [...this.state.carts];
    let updatedQty = this.state.qty;
    for (let item of updatedCarts) {
      if (item.name === itemName && item.count > 1) {
        item.count--;
        updatedQty--;

        this.setState((prevState) => ({
          carts: updatedCarts,
          qty: updatedQty,
        }));
      } else if (item.name === itemName && item.count <= 1) {
        let index = updatedCarts.indexOf(item.name);
        updatedCarts.splice(index);
        item.count = item.count;
      }
      this.setState((prevState) => ({
        count: item.count,
        carts: updatedCarts,
        qty: updatedCarts.length,
      }));
    }
  };

  deleteFromCart = (itemName) => {
    let updatedCarts = [...this.state.carts];
    let updatedQty = this.state.qty;

    for (let item of updatedCarts) {
      if (item.name === itemName) {
        let index = updatedCarts.indexOf(item.name);
        updatedCarts.splice(index);

        updatedQty = updatedCarts.length;
      }
      this.setState(() => ({
        carts: updatedCarts,
        qty: updatedQty,
      }));
    }
  };

  addQty = () => {
    this.setState((prevState) => ({
      qty: prevState.qty + 1,
    }));
  };
  handleFruitDetail = (id) => {
    const thisFruit = this.state.fruits.find((fruit) => {
      return fruit.id === id;
    });
    this.setState({ selectedFruit: thisFruit });
  };
  handleVegDetail = (id) => {
    const thisVeg = this.state.vegetables.find((veg) => {
      return veg.id === id;
    });
    this.setState({ selectedVeg: thisVeg });
  };
  handlePrice = (id) => {
    const thisPrice = this.state.carts.find((price) => {
      return price.price;
    });
    this.setState({ cartPrice: thisPrice });
  };
  addCart = (item) => {
    if (item.count === 0) item.count = 1;
    this.setState({
      carts: [...this.state.carts, item],
    });
  };

  // filterOnChange = (event) => {
  //   let inputValue = event.target.value;

  //   const filteredItemFruit = this.state.fruits.filter((fruit) => {
  //     return;
  //     Object.keys(fruit).some((key) =>
  //       this.state.fruits[fruit]
  //         .toLowerCase()
  //         .includes(this.state.inputValue.toLowerCase())
  //     );
  //   });

  //   const filteredItemVeg = this.state.vegetables.filter((veg) => {
  //     return;
  //     Object.keys(veg).some((key) =>
  //       this.state.vegetables[veg]
  //         .toLowerCase()
  //         .includes(this.state.inputValue.toLowerCase())
  //     );
  //   });

  //   this.setState({
  //     filteredItemVeg: filteredItemVeg,
  //     filteredItemFruit: filteredItemFruit,
  //     inputValue: inpuValue,
  //   });
  // };

  handleSearch = (event) => {
    let inputValue = event.target.value;
    this.setState({ search: inputValue });
  };

  render() {
    return (
     <div className="homme">
      <div className="newhead">
        <Header qty={this.state.qty}
        filterOnChange={this.filterOnChange}
        inputValue={this.state.inputValue}
        
        />
        </div>
        
        {/* <main className="appmain"> */}
   <main>
         
          {/* <Switch> */}
            <Route path="/" exact render={() => <Home />} />
            <Route
              path="/vegetablelist/vegetablelist"
              exact
              render={() => (
                <VegetableList
                  vegetables={this.state.vegetables}
                  handleVegDetail={this.handleVegDetail}
                />
              )}
            />
            <Route
              path="/fruitlist/fruitlist"
              exact
              render={() => (
                <FruitList
                  fruits={this.state.fruits}
                  handleFruitDetail={this.handleFruitDetail}
                />
              )}
            />
            <Route
              path="/vegetabledetails/:id"
              exact
              render={(routerProps) => (
                <VegetableDetails
                  handlePrice={this.handlePrice}
                  count={this.state.count}
                  addQty={this.addQty}
                  addCart={this.addCart}
                  selectedVeg={this.state.selectedVeg}
                  carts={this.state.carts}
                  match={routerProps.match}
                />
              )}
            />
            <Route
              path="/fruitdetails/:id"
              exact
              render={(routerProps) => (
                <FruitDetails
                  handlePrice={this.handlePrice}
                  addCart={this.addCart}
                  count={this.state.count}
                  addQty={this.addQty}
                  selectedFruit={this.state.selectedFruit}
                  carts={this.state.carts}
                  match={routerProps.match}
                />
              )}
            />
            <Route
              path="/carts/"
              exact
              render={(routerProps) => (
                <Carts
                  count={this.state.count}
                  incrementCount={this.incrementCount}
                  decrementCount={this.decrementCount}
                  qty={this.state.qty}
                  cartPrice={this.state.cartPrice}
                  carts={this.state.carts}
                  addCart={this.addCart}
                  deleteFromCart={this.deleteFromCart}
                  match={routerProps.match}
                />
              )}
            />
            <Route
              path="/search/"
              exact
              render={(routerProps) => (
                <Search
                  search={this.state.search}
                  // inputValue={this.state.inputValue}
                  // filteredItemFruit={this.state.filteredItemFruit}
                  // filteredItemVeg={this.state.filteredItemVeg}
                  // filterOnChange={this.filterOnChange}
                  vegetables={this.state.vegetables}
                  fruits={this.state.fruits}
                  onChange={(e) => this.handleSearch(e)}
                  match={routerProps.match}
                />
              )}
            />
            <Route
              path="/pay/"
              exact
              render={(routerProps) => <Pay match={routerProps.match} />}
            />
          {/* </Switch> */}
        </main>
        </div>
      
    );
  }
}
export default App;
