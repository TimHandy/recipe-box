/*
This file renders an input text box and updates the state on the parent component defined in app.jsx on every keypress
*/

'use strict'

import React from 'react'

class RecipeList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const list = this.props.store.map( (recipe, idx) => {
            return (
                <li key={idx}>{recipe.name}</li>
            )
        })

      return (
        <div>
          <ul>
            {list}
          </ul>
        </div>
      )

    }
}

module.exports = RecipeList
