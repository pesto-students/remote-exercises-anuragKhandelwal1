import React, { Component } from 'react';

export default class GroceryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list,
            redText: false
        }

    }

    render() {
        return (
            <div>
                <h1>Grocery List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Qty</th>
                            <th className='delete-icon' onClick={() => this.deleteAllItem()} >Delete All</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(this.state.list).map((item, index) => (
                            <tr key={index} className="list-item" onClick={() => { this.toggleClassName() }}>
                                <td>{index + 1}</td>
                                <td className={this.state.redText ? 'red-text capitalize' : 'black-text capitalize'} >{item[0]}</td>
                                <td>{item[1]}</td>
                                <td className='delete-icon' onClick={() => this.deleteItem(item[0])}>Delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    deleteItem = (item) => {
        delete this.state.list[item]
        this.setState({ list: this.state.list });
    }

    deleteAllItem = () => {
        this.setState({ list: {} })
    }

    toggleClassName = () => {
        this.setState({ redText: !this.state.redText })
    }

}
