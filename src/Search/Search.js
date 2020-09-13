import React, { Component } from "react";
import { Link } from "react-router-dom";
class Search extends Component {
  render() {
    const inpu = this.props.inputValue;
    const vegan = this.props.vegetables;
    const fru = this.props.fruits;

    return (
      <div className="detail">
        if(vegan)
        {vegan
          .filter((veg) => veg.includes(inpu))
          .map((filteredName) => (
            <ul>
              <img src={filteredName.image_url} alt={filteredName.image_url} />
              <p>{filteredName.name} </p>
              <p>{filteredName.price} </p>
            </ul>
          ))}
        else
        {fru
          .filter((fruit) => fruit.includes(inpu))
          .map((filteredName) => (
            <ul>
              <img src={filteredName.image_url} alt={filteredName.image_url} />
              <p>{filteredName.name} </p>
              <p>{filteredName.price} </p>
            </ul>
          ))}
        <Link to="/carts/">
          <li>Add To Cart</li>
        </Link>
        <li> Pay</li>
      </div>
    );
  }
}

export default Search;

// let  vegiSearch;
// let  fruitSearch;
// vegiSearch=this.props.sortVeg;
// fruitSearch=this.props.sortFruit;

/* <img
                src={vegiSearch.image_url}
                alt={vegiSearch.image_url}
                width="300px"
              />
              {/* <p>{this.props.selectedVeg.name} </p>
              <p>{this.props.selectedVeg.price} </p>
              <p>{this.props.selectedVeg.description} </p>
              <p>{this.props.selectedVeg.lebel} </p> */
