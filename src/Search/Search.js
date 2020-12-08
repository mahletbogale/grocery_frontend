import React, { Component } from "react";
// import { Link } from "react-router-dom";
class Search extends Component {
  render() {
    
    // const inpu = this.props.inputValue;
    // const vegan = this.props.filteredItemVeg;
    // const fru = this.props.filteredItemFruit;
    const vegan = this.props.vegetables;
    // const fru = this.props.fruits;
 return(
  // if(vegan){
      vegan.filter((data)=>{
        
      if((this.props.search !== null)
          // return data
      && (data.name.toLowerCase().includes(this.props.search.toLowerCase()) ) ){
         
      return(
  
      <div>
        
        <ul>
          <img src={data.image_url} alt={data.image_url} />
          <p>{data.name} </p>
          <p>{data.price} </p>
        </ul>
     

      </div>
      )}})
         )}}
         export default Search;
    
    // }else if(fru){

    //   const itemsF = fru.filter((data)=>{
    //     if(this.props.search == null)
    //         return data
    //     else if(data.name.toLowerCase().includes(this.props.search.toLowerCase()) ){
    //         return data
    //     }

    //   }).map(itemsF=>{
    //     return(
    //     <div>
          
    //       <ul>
    //         <img src={itemsF.image_url} alt={itemsF.image_url} />
    //         <p>{itemsF.name} </p>
    //         <p>{itemsF.price} </p>
    //       </ul>
        
    //     </div>
       
          
    //    )})
      



// {/* 


    // return (
    //   <div className="detail">
    //     if(vegan)
    //     {vegan.map((filteredName) => (
    //       <ul>
    //         <img src={filteredName.image_url} alt={filteredName.image_url} />
    //         <p>{filteredName.name} </p>
    //         <p>{filteredName.price} </p>
    //       </ul>
    //     ))}
    //     else
    //     {fru.map((filteredName) => (
    //       <ul>
    //         <img src={filteredName.image_url} alt={filteredName.image_url} />
    //         <p>{filteredName.name} </p>
    //         <p>{filteredName.price} </p>
    //       </ul>
    //     ))} */}
        

       
  
      
  // }
  //   }


