# Notes for building a React App

## Setting Up React App

Install create-react-app globally with **$ npm i create-react-app -g**

Set up React app with **$ create-react-app <directory-name>**

Delete everything in /src except for App.js and index.js. Also delete everything in /public except for index.html

**$ npm start** to run

## Passing Data

You can pass data into components using props.
*Props* are a collection of values that are passed into components as static values. They are not meant to be changed by the component.

You can pass them in the render using **{this.props.<keyname>}**

*State* are a collection of values that are managed and updated by components.

## The constructor method

**super();** will give the keyword *this* the context within the component rather than its parent class (React.component).

Set your initial state inside the constructor method inside **this.state = {}**.

## React components

React components can output/render other react components.


## Additional Notes

Browser will not automatically reload if you are in Vagrant. **$ exit**, **$ vagrant halt** to exit out of vagrant.
