'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import './css/styles.scss'
import AddRecipe from 'AddRecipe'
import RecipeList from 'RecipeList'

class App extends React.Component {
    constructor(props) {
        super()
        this.state = {
            store : [],
            name : '',
            ingredients : ''
        }
    }

    componentDidMount() {
        this.getData()
    }

    // Retrieve data from localStorage
    getData = (callback) => {   
        const str = localStorage.getItem('recipeBox')
        const jsonData = JSON.parse(str)
        if (jsonData) {
             this.setState({
                store: jsonData
            }) 
        }
           
        if (callback) {
            callback()
        }
        
    }

    // Save data to Local Storage
    saveData = (store) => {
        const str = JSON.stringify(this.state.store)
        localStorage.setItem('recipeBox', str)  //setItem and getItem are pretty much all you can do with localStorage
        console.log('saved to localStorage')
        // TODO: add error handling, like pass back a return val and throw an error if unable to save 
    }

    submitRecipe = () => {
        const name = this.state.naAddRecipe
AddRecipeme
        const ingredients = this.state.ingredients
        const newRecipe =  {
            name: name,
            ingredients: ingredients
        }
        // console.log(JSON.stringify(newRecipe, null, 2))
        // console.log(JSON.stringify(this.state.store, null, 2))
        this.setState({
            store: this.state.store.concat(newRecipe)
        }, function() {
            this.saveData(this.state.store)
        })
        //{name: 'namof recipe', ingredients; 'tomatoes}
    }



     handleChange = (event) => {
      const id = event.target.id
      this.setState({
        [id]: event.target.value
      });
    }

    render() {
        
    //   console.log('name ', this.state.name)
    //   console.log('ingredients ', this.state.ingredients)
        return (
            <div
                style={{
                    width: '50%',
                    margin: '0 auto'
                }}>
                <AddRecipe handleChange={this.handleChange} recipe={this.state} submitRecipe={this.submitRecipe} />
                <br />
                <RecipeList store={this.state.store} />
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app'))
