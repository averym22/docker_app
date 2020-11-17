//import '/.App.css';
import React from 'react'
import { render } from '@testing-library/react';
import ShoppingCart from './ShoppingCart'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      shoppingCart: []
    }
  }

  // deleteAll = () => {
  //   var response = await fetch('http://localhost:3001/emails').then(res => {return res.json()})
  //   this.setState({emails: response})
  //   console.log(response)
  // }

  deleteItem = (event) => {
    let deleted = this.state.shoppingCart.filter((item, key, array) => {
       return key !== parseInt(event.target.value) 
       
    })     
    this.setState({shoppingCart : deleted})

  }

  addToShoppingCart = (event) => {
    this.setState({shoppingCart: this.state.shoppingCart.concat(event.target.value)})
    console.log(this.state.shoppingCart)
  }

  deleteAll = (event) => {
    this.setState({shoppingCart:[]})
  }

  render() { 
    return (
      <div>
    
        <h1> Grocery Store </h1>
        <ul>
          <li>
            Carrots: <button type="button" value="Carrots" onClick={this.addToShoppingCart}>Add to Cart</button> <br/>
            </li>
            <li>
            Grapes: <button type="button" value="Grapes" onClick={this.addToShoppingCart}>Add to Cart</button><br/>
            </li>
            <li>
            Mango: <button type="button" value="Mangos" onClick={this.addToShoppingCart}>Add to Cart</button> <br/>
            </li>
            <li>
            Peach: <button type="button" value="Peach" onClick={this.addToShoppingCart}>Add to Cart</button> <br/>
            </li><li>
            Celery: <button type="button" value="Celery" onClick={this.addToShoppingCart}>Add to Cart</button><br/>
            </li>
          
        </ul>

        <h1>Shopping Cart</h1> 
        <ShoppingCart cart={this.state.shoppingCart} deleteItem={this.deleteItem}/>
        
        {this.state.shoppingCart.length > 0 ? <button type="button" onClick={this.deleteAll}>Delete All</button> : ''}
           
        
        
      </div>
    );
  }
}

export default App;

