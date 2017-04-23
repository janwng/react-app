import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }

  // custom method to manage state
  update(event) {
    // set the state to whatever is input into input field (form value)
    this.setState({txt: event.target.value})
  }

  render() {
    /* let txt = this.props.txt // pass in props */
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    )
  }
}

// set the type for properties being passed in
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

// set default properties
// only shows if props are not defined in index.js
App.defaultProps = {
  txt: "this is the default txt"
}

export default App
