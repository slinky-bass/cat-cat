import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticleContainer extends Component {

    render() {

        const article = <div>Article</div>;

        return (
            <div className="article-container">
                {article}
            </div>
        );
    }
}

export default ArticleContainer;