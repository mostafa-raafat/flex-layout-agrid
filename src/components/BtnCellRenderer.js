import React from 'react'
import { zoomToPoint } from '../redux/actions';
import { connect } from 'react-redux';

const BtnCellRenderer = (props) => {
  const btnClickedHandler = (de) => {
    // debugger
    // const currentDocument = this.selfRef.current.ownerDocument;
     props.zoomToPoint(props.node.data.attributes.location.split("/"));
  }
  return (
    <button onClick={btnClickedHandler}>Zoom</button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    zoomToPoint: location => dispatch(zoomToPoint(location))
  };
};

export default connect(null, mapDispatchToProps)(BtnCellRenderer);