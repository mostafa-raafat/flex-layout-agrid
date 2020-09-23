import React, { useRef, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { zoomToPoint } from '../../redux/actions';

const ZoomButton = props => {
  const zoomButtonRef = useRef();

  const handleClick = useCallback(() => {
    'dasd/dasdsa';

    props.zoomToPoint(props.node.data.attributes.location.split('/'));
  }, [props]);

  useEffect(() => {
    const zoomRef = zoomButtonRef.current;
    zoomRef.addEventListener('click', handleClick);
    return () => zoomRef.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <button type="button" ref={zoomButtonRef}>
      Zoom
    </button>
  );
};

ZoomButton.propTypes = {
  zoomToPoint: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  node: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    zoomToPoint: field => dispatch(zoomToPoint(field))
  };
};

export default connect(null, mapDispatchToProps)(ZoomButton);
