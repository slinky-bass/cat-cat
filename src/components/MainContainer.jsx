import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// ----- INTERNAL ----- \\
import MainNav from './MainNav'
import List from './List.jsx';
import { fetchListItems, selectListItem } from '../actions/list';

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

        return (
            <div className="main-container">
                <MainNav />
                <List list={this.props.list}/>
            </div> 
        );     
    }
}

MainContainer.propTypes = {
    list: PropTypes.object.isRequired,
    fetchListItems: PropTypes.func.isRequired,
    selectListItem: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListItems: () => dispatch(fetchListItems()),
        selectListItem: (selectedId) => dispatch(selectListItem(selectedId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);