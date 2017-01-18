/*
This file renders an input text box and updates the state on the parent component defined in app.jsx on every keypress
*/

'use strict'

import React from 'react'
import {Panel, Accordion} from 'react-bootstrap';

class RecipeList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const list = this
            .props
            .store
            .map((recipe, idx) => {
                console.log('recipe: ', recipe.ingredients);
                return (
                    <Panel eventKey={idx} key={idx} header={recipe.name}>
                        <h3 className="text-center">Ingredients</h3>
                        {recipe
                            .ingredients
                            .map((ingredient, idx) => {
                                return <li className="list-group-item" key={idx}>{ingredient}</li>
                            })}
                        <br/>
                        <button className='btn btn-primary' onClick={this.props.editRecipe}>Edit Recipe</button>
                        <button className='btn btn-danger' onClick={this.props.deleteRecipe}>Delete Recipe</button>
                    </Panel>
                )
            })

        return (
            <div>
                <Accordion>
                    {list}
                </Accordion>
            </div>
        )

    }
}

module.exports = RecipeList
