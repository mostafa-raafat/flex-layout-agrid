import React from 'react';
import FlexLayout from 'gss-flex-layout';
import { MainLayout } from './layout';
// Maps ---------------------------------------->
import Esri from './components/Maps/Esri';
import Leaflet from './components/Maps/Leaflet';
import Google from './components/Maps/Google';
import Here from './components/Maps/Here';
// Grid ---------------------------------------->
import CallsList from './components/Grid/CallsList';

import AddCall from './components/AddCall';

import SocketHandler from './shared/SocketHandler';

// import CallsListClass from './components/CallsListClass';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { model: FlexLayout.Model.fromJson(MainLayout) };
    this.selfRef = React.createRef(null);
  }

  // eslint-disable-next-line class-methods-use-this
  factory(node) {
    const component = node.getComponent();
    if (component === 'AddCall') {
      return <AddCall />;
    }
    if (component === 'CallsList') {
      return <CallsList />;
    }
    if (component === 'Esri') {
      return <Esri />;
    }
    if (component === 'Leaflet') {
      return <Leaflet />;
    }
    if (component === 'Google') {
      return <Google />;
    }
    if (component === 'Here') {
      return <Here />;
    }
    return null;
  }

  render() {
    return (
      <>
        <FlexLayout.Layout
          ref={this.selfRef}
          // eslint-disable-next-line react/destructuring-assignment
          model={this.state.model}
          // eslint-disable-next-line react/jsx-no-bind
          factory={this.factory.bind(this)}
        />
        <SocketHandler />
      </>
    );
  }
}

export default App;
