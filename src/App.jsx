'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import './css/styles.scss'
import AddRecipe from 'AddRecipe'

class App extends React.Component {
    constructor(props) {
        super()
        this.state = {
          name : '',
          ingredients : ''
        }
    }

     handleChange = (event) => {
      const id = event.target.id
      this.setState({
        [id]: event.target.value
      });
    }

    render() {
      console.log('name ', this.state.name)
      console.log('ingredients ', this.state.ingredients)
        return (
            <div
                style={{
                    width: '50%',
                    margin: '0 auto'
                }}>
                <AddRecipe handleChange={this.handleChange} recipe={this.state}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app'))
