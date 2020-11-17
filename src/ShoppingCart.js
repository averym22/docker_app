import React from 'react'

class ShoppingCart extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div> 
              <ul>          
              {this.props.cart.map((item, index) => {
                  return <li key={index}>
                {item} <button type="button" value={index} onClick={this.props.deleteItem}>Delete</button>
                  </li>
              })}
              </ul>
            </div> 
            
           
        )
    }
}

export default ShoppingCart