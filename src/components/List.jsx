import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ----- INTERNAL ----- \\
import { Table, TableRow } from './Table.jsx';
import ErrorNotification from '../common/ErrorNotification.jsx';
import UpdatingNotification from '../common/UpdatingNotification.jsx';

// ----- COMPONENTS ----- \\
class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

        this.getListTable = this.getListTable.bind(this);
        this.mapListItemsToTableRows = this.mapListItemsToTableRows.bind(this);
    }

    mapListItemsToTableRows(item, index) {
        const image = <img className="list-item-image" src={item.imageSrc} alt="a placeholder for a cat" />;
        const title = item.title;;
        const description = item.description;
        const rowData = [image, title, description];

        return (
            <TableRow key={index} rowData={rowData} allData={item} selectListItem={this.props.selectListItem} />
        );
    }

    getListTable() {
        const self = this;
        const rows = this.props.list.listItems.map(self.mapListItemsToTableRows);

        const tableHeaders = [
            {
                displayValue: "Image",
                sortValue: ""
            },
            {
                displayValue: "Breed",
                sortValue: "title"
            },
            {
                displayValue: "Description",
                sortValue: ""
            }
        ];

        return (
            <Table
                columnHeadings={tableHeaders}
                defaultSortValue={"name"}
                sortList={this.props.sortList}>
                <div className="table-row-list">
                    {rows}
                </div>
            </Table>
        );
    }

    render() {

        //IF THERE ARE LIST ITEMS
        const listTable = this.props.list.listItems.length > 0
            ? this.getListTable()
            : null;

        //ERROR NOTIFICATION COMPONENT
        const errorNotification = this.props.list.error !== null && typeof this.props.list.error !== "undefined"
            ? <div className="notification-container">
                <ErrorNotification text={this.props.list.error} buttonText={"Close"} callback={this.props.removeErrorNotification} />
            </div>
            : null;

        //UPDATE NOTIFICATION COMPONENT
        const updateNotification = this.props.list.loading === true
            ? <div className="notification-container">
                <UpdatingNotification text={"Loading Cats!"} />
            </div>
            : null;

        return (
            <div className="list-container">
                {errorNotification}
                {updateNotification}
                {listTable}
            </div>
        );
    }
}

List.propTypes = {
    list: PropTypes.object.isRequired
}

export default List;
