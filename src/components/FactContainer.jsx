import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// ----- INTERNAL ----- \\
import MainNav from './MainNav'
import List from './List';
import Article from './Article';
import { fetchListItems, selectListItem, deselectListItem } from '../actions/list';

// ----- COMPONENTS ----- \\
class MainContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentWillMount() {
        this.props.fetchListItems();
    }

    render() {

        const containerClassNames = this.props.list.selectedItem !== null ? "main-container selected" : "main-container";

        return (
            <div className={containerClassNames}>
                <MainNav />
                <List list={this.props.list} selectListItem={this.props.selectListItem}/>
                <Article selectedItem={this.props.list.selectedItem} deselectListItem={this.props.deselectListItem}/>
            </div> 
        );     
    }
}

MainContainer.propTypes = {
    list: PropTypes.object.isRequired,
    fetchListItems: PropTypes.func.isRequired,
    selectListItem: PropTypes.func.isRequired,
    deselectListItem: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListItems: () => dispatch(fetchListItems()),
        selectListItem: (selectedId) => dispatch(selectListItem(selectedId)),
        deselectListItem: () => dispatch(deselectListItem())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);