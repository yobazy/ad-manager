import React from "react";

// function handleChange(event) {
//     setState({value: event.target.value});
//   }

export default class App extends React.Component {

  render() {
    return (
        <div>
            <h2>Create new listing</h2>
            <form>
                <label for="img">Photos (add up to 10):</label><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                    <input type="file" id="img" name="img" accept="image/*" /><br></br>
                <label>
                    Title:
                    <input type="text" name="name" required/>
                </label><br></br>
                <label>
                    Price:
                    <input type="text" name="name" />
                </label><br></br>
                <label>
                    Category:
                    <input type="text" name="name" />
                </label><br></br>
                <label>
                    Condition:
                    <select
                        // value={this.state.value} 
                        // onChange={this.handleChange}
                    >
                    <option value="grapefruit">New</option>
                    <option value="lime">Used - good</option>
                    <option value="coconut">Used - like new</option>
                </select>
                </label><br></br> 
                    
                <label>
                    Description:
                    <textarea></textarea>
                </label><br></br>
                <input type="submit" value="Submit" />

            </form>
        </div>
    )
  }
}