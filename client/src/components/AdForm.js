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
                <label>
                    Photos add up to 10:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Title:
                    <input type="text" name="name" required/>
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Price:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Category:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Condition:
                </label>
                <select
                // value={this.state.value} 
                // onChange={this.handleChange}
                >
                    <option value="grapefruit">New</option>
                    <option value="lime">Used - good</option>
                    <option value="coconut">Used - like new</option>
                </select>                
                <label>
                    Description:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />

            </form>
        </div>
    )
  }
}