// import React, { Component } from "react";
// import "./App.css";
// import { Route } from "react-router-dom";
// import Home from "../Home/Home";
// import Header from "../Header/Header";
// import VegetableList from "../Vegetable/VegetableList";
// import VegetableDetails from "../Vegetable/VegetableDetails";
// import FruitDetails from "../Fruit/FruitDetails";
// import FruitList from "../Fruit/FruitList";
// import { Link, Switch } from "react-router-dom";
// import Carts from "../Carts/Carts";
// import Search from "../Search/Search";
// import Pay from "../Pay/Pay";
// import { APIURL } from "../config";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       fruits: [],
//       selectedFruit: null,
//       selectedVeg: null,
//       carts: [],
//       cartPrice: [],
//       vegetables: [],
//       sortVeg: {},
//       sortFruit: {},
//       qty: 0,
//       total: null,
//       sortValue: "",
//       count: 1,
//       inputValue: "",
//     };
//   }

//   componentDidMount() {
//     fetch(APIURL + "/fruits/")
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({ fruits: json });
//       })
//       .catch(console.error);

//     fetch(APIURL + "/vegetables/")
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({ vegetables: json });
//       })
//       .catch(console.error);
//   }

//   incrementCount = () => {
//     this.setState({
//       count: this.state.count + 1,
//       qty: this.state.qty + 1,
//     });
//   };

//   // incrementCount=(id)=>{
//   // if(this.state.carts.includes(id)){
//   //   this.setState({

//   //       count:1,
//   //       qty:this.state.qty + 1

//   //   });
//   // }
//   //       else {
//   //         this.setState({
//   //         count: this.state.count + 1,

//   //   });}
//   // }

//   DecrementCount = (event) => {
//     this.setState({
//       count: this.state.count - 1,
//       qty: this.state.qty - 1,
//     });
//   };

//   addQty = () => {
//     this.setState((prevState) => ({
//       qty: prevState.qty + 1,
//     }));
//   };

//   handleFruitDetail = (id) => {
//     const thisFruit = this.state.fruits.find((fruit) => {
//       return fruit.id === id;
//     });

//     this.setState({ selectedFruit: thisFruit });
//   };

//   handleVegDetail = (id) => {
//     const thisVeg = this.state.vegetables.find((veg) => {
//       return veg.id === id;
//     });

//     this.setState({ selectedVeg: thisVeg });
//   };

//   handlePrice = (id) => {
//     const thisPrice = this.state.carts.find((price) => {
//       return price.price;
//     });
//     this.setState({ cartPrice: thisPrice });
//   };

//   addCart = (item) => {
//     this.setState({
//       carts: [...this.state.carts, item],
//     });
//   };

//   filterOnChange = (event) => {
//     let inputValue = event.target.value;
//     // let filteredItemFruit = this.state.fruits.filter((fruit) => {
//     //   return fruit.toLowerCase().includes(inputValue.toLowerCase());
//     // });
//     // let filteredItemVeg = this.state.vegetables.filter((veg) => {
//     //   return veg.toLowerCase().includes(inputValue.toLowerCase());
//     // });
//     this.setState({
//       // sortVeg: filteredItemVeg,
//       // sortFruit: filteredItemFruit,
//       inputValue: inputValue,
//     });
//   };

//   render() {
//     // console.log(this.state.sortVeg);
//     return (
//       <div className="apphead">
//         <Header qty={this.state.qty} />

//         <main className="appmain">
//           <form>
//             <input
//               type="text"
//               className="put"
//               placeholder="Search"
//               onChange={this.filterOnChange}
//             />
//           </form>

//           <Link to="/vegetablelist/vegetablelist">
//             <li>Vegetables</li>
//           </Link>
//           <Link to="/comming/comming">
//             <li>Comming</li>
//           </Link>
//           <Link to="/fruitlist/fruitlist">
//             <li>Fruits</li>
//           </Link>
//           <Link to="/commingS/commingS">
//             <li>Comming</li>
//           </Link>
//           <Link to="/commingSo/commingS0">
//             <li>Comming</li>
//           </Link>
//           <Link to="/commingSo/commingS0">
//             <li>Comming</li>
//           </Link>

//           <Switch>
//             <Route path="/" exact render={() => <Home />} />

//             <Route
//               path="/vegetablelist/vegetablelist"
//               exact
//               render={() => (
//                 <VegetableList
//                   vegetables={this.state.vegetables}
//                   handleVegDetail={this.handleVegDetail}
//                 />
//               )}
//             />

//             <Route
//               path="/fruitlist/fruitlist"
//               exact
//               render={() => (
//                 <FruitList
//                   fruits={this.state.fruits}
//                   handleFruitDetail={this.handleFruitDetail}
//                 />
//               )}
//             />

//             <Route
//               path="/vegetabledetails/:id"
//               exact
//               render={(routerProps) => (
//                 <VegetableDetails
//                   handlePrice={this.handlePrice}
//                   count={this.state.count}
//                   addQty={this.addQty}
//                   addCart={this.addCart}
//                   selectedVeg={this.state.selectedVeg}
//                   carts={this.state.carts}
//                   match={routerProps.match}
//                 />
//               )}
//             />

//             <Route
//               path="/fruitdetails/:id"
//               exact
//               render={(routerProps) => (
//                 <FruitDetails
//                   handlePrice={this.handlePrice}
//                   addCart={this.addCart}
//                   count={this.state.count}
//                   addQty={this.addQty}
//                   selectedFruit={this.state.selectedFruit}
//                   carts={this.state.carts}
//                   match={routerProps.match}
//                 />
//               )}
//             />

//             <Route
//               path="/carts/"
//               exact
//               render={(routerProps) => (
//                 <Carts
//                   count={this.state.count}
//                   incrementCount={this.incrementCount}
//                   DecrementCount={this.DecrementCount}
//                   qty={this.state.qty}
//                   cartPrice={this.state.cartPrice}
//                   carts={this.state.carts}
//                   addCart={this.addCart}
//                   match={routerProps.match}
//                 />
//               )}
//             />

//             <Route
//               path="/search/"
//               exact
//               render={(routerProps) => (
//                 <Search
//                   inputValue={this.state.inputValue}
//                   fruits={this.state.fruits}
//                   vegetables={this.state.vegetables}
//                   // sortVeg={this.state.sortVeg}
//                   // sortFruit={this.state.sortFruit}
//                   filterOnChange={this.filterOnChange}
//                   match={routerProps.match}
//                 />
//               )}
//             />
//             <Route
//               path="/pay/"
//               exact
//               render={(routerProps) => <Pay match={routerProps.match} />}
//             />
//           </Switch>
//         </main>
//       </div>
//     );
//   }
// }

// export default App;

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
      sortVeg: {},
      sortFruit: {},
      qty: 0,
      total: null,
      sortValue: "",
      count: 1,
      inputValue: "",
    };
  }
  componentDidMount() {
    fetch(APIURL + "/fruits/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ fruits: json });
      })
      .catch(console.error);
    fetch(APIURL + "/vegetables/")
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
    this.setState({
      carts: updatedCarts,
    });
  };
  decrementCount = (itemName) => {
    let updatedCarts = [...this.state.carts];
    for (let item of updatedCarts) {
      if (item.name === itemName) {
        if (item.count > 1) item.count--;
      }
    }
    this.setState({
      carts: updatedCarts,
    });
  };
  addQty = () => {
    this.setState((prevState) => ({
      qty: prevState.qty + 1 ,
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

  filterOnChange = (event) => {
    let inputValue = event.target.value;
    // let filteredItemFruit = this.state.fruits.filter((fruit) => {
    //   return fruit.toLowerCase().includes(inputValue.toLowerCase());
    // });
    // let filteredItemVeg = this.state.vegetables.filter((veg) => {
    //   return veg.toLowerCase().includes(inputValue.toLowerCase());
    // });
    this.setState({
      // sortVeg: filteredItemVeg,
      // sortFruit: filteredItemFruit,
      inputValue: inputValue,
    });
  };
  render() {
    // console.log(this.state.sortVeg);
    return (
      <div className="apphead">
        <Header qty={this.state.qty} />
        <main className="appmain">
          <form>
            <input
              type="text"
              className="put"
              placeholder="Search"
              onChange={this.filterOnChange}
            />
          </form>
          <Link to="/vegetablelist/vegetablelist">
            <li>Vegetables</li>
          </Link>
          <Link to="/comming/comming">
            <li>Comming</li>
          </Link>
          <Link to="/fruitlist/fruitlist">
            <li>Fruits</li>
          </Link>
          <Link to="/commingS/commingS">
            <li>Comming</li>
          </Link>
          <Link to="/commingSo/commingS0">
            <li>Comming</li>
          </Link>
          <Link to="/commingSo/commingS0">
            <li>Comming</li>
          </Link>
          <Switch>
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
                  match={routerProps.match}
                />
              )}
            />
            <Route
              path="/search/"
              exact
              render={(routerProps) => (
                <Search
                  inputValue={this.state.inputValue}
                  fruits={this.state.fruits}
                  vegetables={this.state.vegetables}
                  filterOnChange={this.filterOnChange}
                  match={routerProps.match}
                />
              )}
            />
            <Route
              path="/pay/"
              exact
              render={(routerProps) => <Pay match={routerProps.match} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
