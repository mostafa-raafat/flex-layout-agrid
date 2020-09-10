import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import BtnCellRenderer from './BtnCellRenderer'
import { connect } from 'react-redux';
import BtnCellUpdate from './BtnCellUpdate';

const CallsList = (props) => {
  const [rowData, setRowData] = useState(props.calls);
  const selfRef = React.useRef()

  const [myDocument, setMyDocument] = useState(null);

  useLayoutEffect( () => {
    setMyDocument(selfRef.current.ownerDocument);
  }, []) 

  useEffect(() => {
    setRowData([...props.calls])
  }, [props.calls])

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: '100%',
        width: '100%'
      }}
      ref={selfRef}
    >
      <AgGridReact
        rowData={rowData}
        immutableData={true}
        getRowNodeId={data => data.attributes.id}
        getDocument={() => {
          return myDocument 
        }}
        pagination={true}
        columnDefs={[{
          headerName: "Id", field: "attributes.id"
        }, {
          headerName: "Location", field: "attributes.location"
        },
        {
          headerName: 'Zoom',
          field: 'value',
          cellRenderer: 'btnCellRenderer',
          colId: 'params',
          width: 180,
        },
        {
          headerName: 'Update',
          field: 'value',
          cellRenderer: 'btnCellUpdate',
          colId: 'params',
          width: 180,
        }]}
        defaultColDef={{
          editable: true,
          enableRowGroup: true,
          enablePivot: true,
          enableValue: true,
          sortable: true,
          resizable: true,
          filter: true,
          flex: 1,
          minWidth: 100,
        }}
        context={{ componentParent: this }}
        frameworkComponents={{
          btnCellRenderer: BtnCellRenderer,
          btnCellUpdate: BtnCellUpdate,
        }}
      >
      </AgGridReact>
    </div>
  )
}

CallsList.propTypes = {
  calls: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({
        id: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  ).isRequired
}

const mapStateToProps = state => ({
  calls: state.calls
})

export default connect(mapStateToProps)(CallsList);