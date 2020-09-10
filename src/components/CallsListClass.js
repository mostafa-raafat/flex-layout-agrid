import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import BtnCellRenderer from './BtnCellRenderer'
import { connect } from 'react-redux';
import BtnCellUpdate from './BtnCellUpdate';

class CallsListClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowData: []
        }
    }

    componentDidMount() {
        console.log(this)
        this.setState([...this.props.calls])
    }

    onGridReady(params) {
        console.log(params);
    }

    render() {
        return (
            <div
                className="ag-theme-alpine"
                style={{
                    height: '100%',
                    width: '100%'
                }}
            >
                <AgGridReact
                    onGridReady={this.onGridReady}
                    rowData={this.state.rowData}
                    immutableData={true}
                    getRowNodeId={data => data.attributes.id}
                    pagination={true}
                    // getDocument={() => { return ref }}
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
}

CallsListClass.propTypes = {
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

export default connect(mapStateToProps)(CallsListClass);

