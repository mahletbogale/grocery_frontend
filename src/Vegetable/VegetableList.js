import React, { Component } from "react";
import { Link } from "react-router-dom";

class VegetableList extends Component {
  render() {
    return (
      <div className="list">
        <div className="boxbg">
          {this.props.vegetables.map((vegetable) => {
            return (
              <Link
                onClick={() => {this.props.handleVegDetail(vegetable.id)}} key={vegetable.id} to={`/vegetabledetails/${vegetable.id}`}>
                <div className="boxes">
                  <img
                    src={vegetable.image_url}
                    alt={vegetable.image_url}
                    width="300px"
                  />
                  <p>{vegetable.name} </p>
                  <p>{vegetable.price} </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default VegetableList;
