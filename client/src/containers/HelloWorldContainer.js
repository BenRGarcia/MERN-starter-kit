import React, { Component } from 'react';
import { HelloWorld } from '../components/HelloWorld';

export class HelloWorldContainer extends Component {
  state = {
    title: 'Hello World!'
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <HelloWorld
          title={this.state.title}
        />
      </div>
    );
  }
}