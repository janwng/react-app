import React from 'react';

class App extends React.Component {
  render() {
    let txt = this.props.txt
    return (
      <div>
        <h1>{txt}</h1>
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
