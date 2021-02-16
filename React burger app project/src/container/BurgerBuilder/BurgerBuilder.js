
import React, { Component } from 'react'
import Burger from '../../components/Layout/Burger/Burger'
import BuildControl from '../../components/Layout/Burger/BurgerControls/BurgerControl/BurgerControl'
import BuildControls from '../../components/Layout/Burger/BurgerControls/BuildControls'

const INGREDIENT_PRICE = {
    salad: 10,
    bacon: 20,
    cheese: 40,
    meat: 50
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {          // ingredient is the obj while salad is key and 1 is value.
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 20
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let newCount = oldCount + 1;
        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newCount;
        const oldPrice = INGREDIENT_PRICE[type]  // object value can be access through it
        const newPrice = this.state.totalPrice + oldPrice;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    }


    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let newCount = oldCount - 1;

        if (this.state.ingredients[type] <= 0) { return }

        let updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newCount;
        const oldPrice = INGREDIENT_PRICE[type]  // object value can be access through it
        const newPrice = oldPrice - this.state.totalPrice;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    }



    render() {
        let disableBtn = { ...this.state.ingredients };
        for (let key in disableBtn) {
            disableBtn[key] = disableBtn[key] <= 0
        }

        return (
            <React.Fragment>
                <Burger p_ingredients={this.state.ingredients} />
                <BuildControls addedIngre={this.addIngredientHandler}
                    removeIngre={this.removeIngredientHandler}
                    disabled={this.disableBtnHandler} />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;