import React, { forwardRef } from 'react'
import { MainLayout } from "./layout";
import FlexLayout from "flexlayout-react";
import Map from './components/Map'
import AddCall from './components/AddCall'
import CallsList from './components/CallsList'
// import CallsListClass from './components/CallsListClass';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { model: FlexLayout.Model.fromJson(MainLayout) };
    this.selfRef = React.createRef(null);
  }

  factory(node) {
    let component = node.getComponent();
    if (component === "AddCall") {
      return <AddCall />;
    } else if (component === 'CallsList') {
      return <CallsList />
    }
    else if (component === 'Map') {
      return <Map />;
    }
  }

  render() {
    return (
      <FlexLayout.Layout
        ref={this.selfRef}
        model={this.state.model}
        factory={this.factory.bind(this)} />
    );
  }
}

export default App;