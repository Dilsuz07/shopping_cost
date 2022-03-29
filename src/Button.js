import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            number:0,
            title: ''
        }
    }

    increment = () => {
        this.setState((prev) => {
            return {
                number: prev.number + 1,
            }
        })
    }
    
    decriment = () => {
        this.setState((old) => {
            return {
                number: old.number - 1,
            }
        })
    }
    
    
    allCost = () => {
        this.setState((price) => {
            return {
              title: price.number*300
            }
        })
    }
    
    render()  {
        const {number,title} = this.state
        
        return(
            <div>
                <p>Cost : 300</p>
                <p> All Cost {title} </p>
                <p>Value <b> {number} </b></p>
                <button onClick={this.decriment}>-</button>
                <button onClick={this.increment}>+</button><br/>
                <button onClick={this.allCost}>All Cost</button>
            </div>
        )
    }
}

export default Button