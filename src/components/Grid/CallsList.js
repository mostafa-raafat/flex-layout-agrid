import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { connect } from 'react-redux';
import ZoomButton from './ZoomButton';

const CallsList = ({ calls }) => {
  const [rowData, setRowData] = useState([]);
  const [currentDocument, setCurrentDocument] = useState(null);
  const selfRef = useRef();

  useLayoutEffect(() => {
    setCurrentDocument(selfRef.current.ownerDocument);
  }, []);

  useEffect(() => {
    if (Object.keys(calls).length > 0) {
      setRowData([...Object.values(calls)]);
    }
  }, [calls]);

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: '100%',
        width: '100%'
      }}
      ref={selfRef}
    >
      {currentDocument && (
        <AgGridReact
          rowData={rowData}
          immutableData
          getRowNodeId={data => data.attributes.id}
          getDocument={() => currentDocument}
          pagination
          columnDefs={[
            {
              headerName: 'Id',
              field: 'attributes.id'
            },
            {
              headerName: 'Location',
              field: 'attributes.location'
            },
            {
              headerName: 'Zoom',
              field: 'value',
              cellRenderer: 'zoomButton',
              colId: 'params',
              width: 180
            }
          ]}
          defaultColDef={{
            editable: true,
            sortable: true,
            resizable: true,
            filter: true,
            flex: 1,
            minWidth: 100
          }}
          // context={{ componentParent: this }}
          frameworkComponents={{
            zoomButton: ZoomButton
          }}
        />
      )}
    </div>
  );
};

CallsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  calls: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  calls: state.calls
});

export default connect(mapStateToProps)(CallsList);
