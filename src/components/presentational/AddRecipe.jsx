/*
This file renders an input text box and updates the state on the parent component defined in app.jsx on every keypress
*/

'use strict'

import React from 'react'

class AddRecipe extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      return (
        <div>
          <h2>Add Recipe</h2>
          <p>Recipe name</p><input id='name' value={this.props.recipe.name} onChange={this.props.handleChange} placeholder='Recipe name'/>
          <p>Recipe ingredients</p><textarea id='ingredients' value={this.props.recipe.ingredients} onChange={this.props.handleChange} placeholder='Recipe ingredients'/><br/>
          <button>Add Recipe</button>
          <button>Close</button>
        </div>
      )

    }
}

module.exports = AddRecipe
