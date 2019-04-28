import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ----- INTERNAL ----- \\

class Article extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        const articleContents = this.props.selectedItem !== null 
            ? <div className="article-container">
                <article>
                    <header>
                        <h3>The {this.props.selectedItem.title} Cat
                            <button type="button" className="btn-as-link" onClick={this.props.deselectListItem}>x</button>
                        </h3>        
                    </header>
                    <div className="article-contents">
                        <figure>
                            <img className="article-image" src={this.props.selectedItem.imageSrc} alt="a placeholder for a cat" />
                            <figcaption>{this.props.selectedItem.title}'s are known for their <span className="lowercase-text">{this.props.selectedItem.temperament}</span> personalities.</figcaption>
                        </figure>
                        <p className="article-text">{this.props.selectedItem.description}</p>
                    </div>     
                </article>
            </div>
            : "";

        return (
            <React.Fragment>
                {articleContents}
            </React.Fragment>
        );     
    }
}

Article.propTypes = {
    deselectListItem: PropTypes.func.isRequired
}

export default Article;