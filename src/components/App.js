import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  
  componentDidMount() {
    const {params} = this.props.match
    const localStorageRef = localStorage.getItem(params.storeId)
    console.log('ref',localStorageRef);
  
if(localStorageRef) {
  this.setState({
    order: JSON.parse(localStorageRef)
  })
}
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    })
  }
  
  componentWillUnmount() {
    base.removeBinding(this.ref);
  } 
  
  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
  }
  
  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes });
  };
  
  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };
  
  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({
      order
    })
  }
  
  updateFish = (key, updatedFish) => {
    const fishes = {...this.state.fishes}
      fishes[key] = updatedFish
    this.setState({
      fishes
    })
  }
  
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key, i) => <Fish key={i} details={this.state.fishes[key]} addToOrder={this.addToOrder} index={key}/> )}
          
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory fishes={this.state.fishes} addFish={this.addFish} updateFish={this.updateFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;