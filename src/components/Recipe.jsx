import React from 'react'

class Recipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  handleDelete = (idx) => {
    this.props.deleteRecipe(idx);
  }


  render() {
    return (
      <div>
        <div style={{border:"1px solid grey", borderRadius:5}} onClick={this.handleClick}>
          <h2>{this.props.name}</h2>
        </div>
        <div style={{display:(this.state.show ? "inline" : "none") }}>
          <h4>Ingredients</h4>
          <p>{this.props.ingredients.join(', ')}</p>
          <button onClick={() => this.handleDelete(this.props.idx)}>Delete</button>
        </div>
      </div>
    )
  }

} 


module.exports = Recipe

