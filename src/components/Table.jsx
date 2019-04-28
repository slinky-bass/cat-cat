import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ----- COMPONENTS ----- \\
export class Table extends Component {
    constructor() {
        super();

        this.createTableHeader = this.createTableHeader.bind(this);
        this.handleListSort = this.handleListSort.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
    }

    createTableHeader(headingNames) {
        if (!headingNames) {
            return null;
        }

        const headings = headingNames.map((item, index) =>
            <div className="table-row-item" data-filter-type={item.sortValue} key={index} onClick={(e) => this.handleListSort(item.sortValue)}><div className="item-description" >{item.displayValue}</div></div>
        );

        return (
            <div className="table-row table-header">
                {headings}
            </div>
        );
    }

    handleListSort(sortValue) {
        const filterHeaders = document.querySelectorAll("[data-filter-type]");
        let sortOrder;

        for (let i = 0; i < filterHeaders.length; i += 1) {
            const filterClassList = filterHeaders[i].getAttribute("class");

            if (filterHeaders[i].getAttribute("data-filter-type") === sortValue) {
                if (filterClassList.indexOf("active-desc") === -1) {
                    filterHeaders[i].classList.add("active-desc");
                    filterHeaders[i].classList.remove("active-asc");
                    sortOrder = "desc";
                } else {
                    filterHeaders[i].classList.add("active-asc");
                    filterHeaders[i].classList.remove("active-desc");
                    sortOrder = "asc";
                }
            } else {
                filterHeaders[i].classList.remove("active-desc");
                filterHeaders[i].classList.remove("active-asc");
            }
        }
        this.props.sortChatList(sortValue, sortOrder);
    }

    render() {
        const flexTableHeader = this.createTableHeader(this.props.columnHeadings);

        return (
            <div className="flex-table">
                {flexTableHeader}
                {this.props.children}
            </div>
        );
    }
}

export class TableRow extends Component {
    constructor() {
        super();
        this.state = {};

        this.generateTableRow = this.generateTableRow.bind(this);
        this.generateTableRowItem = this.generateTableRowItem.bind(this);
    }

    componentWillMount() {
        this.setState({ allData: this.props.allData, selectedId: this.props.selectedId });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ allData: nextProps.allData, selectedId: nextProps.selectedId });
    }

    generateTableRowItem(item, index) {
        return (<div className="table-row-item" key={index}>{item}</div>);
    }

    generateTableRow(rowData) {
        if (!rowData) {
            return null;
        }
        return rowData.map(this.generateTableRowItem);
    }

    render() {
        const self = this;
        const row = this.generateTableRow(self.props.rowData);
        const chatListClasses = self.state.allData.conversationId === self.props.selectedId ? `table-row active ${self.props.statusClassName}` : `table-row ${self.props.statusClassName}`;
        return (
            <div className={chatListClasses} onClick={() => self.props.selectConversation(self.state.allData.conversationId, self.state.allData.adminAssisting, self.props.statusClassName)}>
                {row}
            </div>
        );
    }
}