import React, { Component } from 'react';


export default class AddGrocery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            list: this.props.list
        }
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.addGrocery = this.addGrocery.bind(this);
    }


    nameChangeHandler(event) {
        this.setState({ name: event.target.value.toLowerCase() });
    }

    addGrocery(event) {
        event.preventDefault();

        if (!this.state.name || !this.state.name.trim())
            return;
        const { name, list } = this.state;
        if (list[name.trim()] > -1) {
            list[name.trim()] += 1
        } else {
            list[name.trim()] = 0;
        }
        this.setState({ list });
        this.props.cb(list);
        this.setState({ name: '' })
    }

    render() {
        return (
            <form onSubmit={this.addGrocery}>
                <h1>Add Grocery</h1>
                <input type='text' value={this.state.name} placeholder='Grocery Name' onChange={this.nameChangeHandler} />
                <input type='submit' className="submitButton" value='Add Grocery' />
            </form>
        )
    }
}
