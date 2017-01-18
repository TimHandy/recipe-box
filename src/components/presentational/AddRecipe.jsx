/*
This file renders an input text box and updates the state on the parent component defined in app.jsx on every keypress
*/

'use strict'

import React from 'react'
import {Button, Popover, Modal, Tooltip, OverlayTrigger} from 'react-bootstrap';

class AddRecipe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    close = () => {
        this.setState({showModal: false});
    }

    open = () => {
        this.setState({showModal: true});
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
            <div>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <h2>Add Recipe</h2>
                            <p>Recipe name</p><input id='name' value={this.props.recipe.name} onChange={this.props.handleChange} placeholder='Recipe name'/>
                            <p>Recipe ingredients</p><textarea id='ingredients' value={this.props.recipe.ingredients} onChange={this.props.handleChange} placeholder='Recipe ingredients'/><br/>
                            <button className='btn btn-primary' onClick={this.props.submitRecipe}>Add Recipe</button>
                            <button className='btn btn-default'>Close</button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <button className='btn btn-primary' onClick={this.open}>Add Recipe</button>
            </div>
        );
    }
}

module.exports = AddRecipe
