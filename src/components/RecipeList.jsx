'use strict'

import React from 'react'
import Recipe from './Recipe'

class RecipeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleDelete = (idx) => {
    // this.setState({open: false})
    this
      .props
      .deleteRecipe(idx)
  }

  handleEdit = () => {
    this
      .props
      .editRecipe(this.state.editIdx)
    this.close()
  }


  render() {
   
    const recipes = this.props.recipes.map((recipe, idx) => {
      return (
        // key below assumes that recipe.name + recipe.ingredients[0] will always be unique.
        <Recipe key={recipe.name + recipe.ingredients[0]} idx={idx} name={recipe.name} ingredients={recipe.ingredients} deleteRecipe={this.handleDelete} />
      )
    })
   
    return (
      <div>
        <h3>{Object.keys(this.props.recipes).length === 0 && "Please add a recipe."}</h3>
        {recipes}
      </div>
    )
  }
}

module.exports = RecipeList