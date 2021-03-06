import React, {Component} from 'react';

class EditFishForm extends Component {
  
  handleChange = (e) => {
    console.log(e.currentTarget.value);
    const updatedFish = {
      ...this.props.fish,
      [e.target.name]: e.target.value
    }
    console.log(updatedFish);
    this.props.updateFish(this.props.index, updatedFish)
  }
  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" value={this.props.fish.name} onChange={this.handleChange}/>
         <input type="text" name="price"value={this.props.fish.price} onChange={this.handleChange}/>
         <select type="text" name="status"value={this.props.fish.status} onChange={this.handleChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
         </select>
         <textarea name="desc" value={this.props.fish.desc} onChange={this.handleChange}></textarea>
         <input type="text" name="image" value={this.props.fish.img} onChange={this.handleChange}/>
       </div>
    )
  }
}

export default EditFishForm;