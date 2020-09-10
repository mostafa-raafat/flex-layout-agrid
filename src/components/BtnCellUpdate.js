import React from 'react'
import { updateCall } from '../redux/actions';
import { connect } from 'react-redux';

const BtnCellUpdate = (props) => {
    const btnClickedHandler = (test) => {
        // debugger
        // const currentDocument = this.selfRef.current.ownerDocument;
        // const currentWindow = currentDocument.defaultView!;
        setInterval(() => {
            props.updateCall(props.node.data);
        }, 1000);
    }
    return (
        <button onClick={btnClickedHandler}>Update Call</button>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateCall: field => dispatch(updateCall(field))
    };
};

export default connect(null, mapDispatchToProps)(BtnCellUpdate);