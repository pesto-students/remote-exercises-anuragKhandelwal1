import React from 'react';
import './App.css';
import AddGrocery from './Components/Add-grocery';
import GroceryList from './Components/Grocery-list';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groceryList: {}
        }
    }


    listCallback = (groceryList) => {
        this.setState({ groceryList })
    }

    render() {
        return (
            <div className="App" >
                <AddGrocery list={this.state.groceryList} cb={this.listCallback} />
                <div className="vl"></div>
                <GroceryList list={this.state.groceryList} />
            </div>
        );
    }
}