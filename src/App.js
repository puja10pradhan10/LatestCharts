import React, { Component } from 'react';
import './App.css';
import HeaderComponent from '../src/components/Header/headerComponent';
import ErrorHandleComponent from '../src/components/ErrorHandle/errorHandleComponent';
import { Route } from 'react-router-dom';
import PropTypes from "prop-types";
// import { withRouter } from "react-router";

// App.contextTypes = {
//   location: React.PropTypes.object
// }

class App extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor() {
    console.log('1 App - in constructor');
    super()
  }

  componentWillMount() {
    console.log('2 App - component will mount')
  }

  componentDidMount() {
    console.log('4 App - component did mount')
    console.log(this.propTypes);
    console.log(<Route></Route>);

  }

  render() {
    console.log('3 App - in render')
    const { location } = this.props;

    console.log(this.props)
    return (
      <div>
        <ErrorHandleComponent>
          <HeaderComponent />
        </ErrorHandleComponent>
      </div>
    );
  }

  shouldComponentUpdate() {
    console.log(' App - component should update')
  }

  componentWillUnmount() {
    console.log('5 App - component will unmount')
  }
}

export default App;
