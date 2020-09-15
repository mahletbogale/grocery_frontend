import React, { Component } from "react";
import { Link } from "react-router-dom";
class FruitList extends Component {
  render() {
    return (
      <div className="list">
        <div className="boxbg">
          {this.props.fruits.map((fruit) => {
            return (
              <Link
                onClick={() => {
                  this.props.handleFruitDetail(fruit.id);
                }}
                key={fruit.id}
                to={`/fruitdetails/${fruit.id}`}
              >
                <div className="boxes">
                  <img
                    src={fruit.image_url}
                    alt={fruit.image_url}
                    width="300px"
                  />
                  <p>{fruit.name} </p>
                  <p>{fruit.price} </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FruitList;
