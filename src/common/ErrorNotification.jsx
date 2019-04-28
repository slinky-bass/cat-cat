import React from 'react';
import PropTypes from 'prop-types';

// ----- COMPONENTS ----- \\
const ErrorNotification = ({ text, buttonText, callback }) => (
    <div className="error-notification">
        <p className="error-text">{text}</p>
        <button type="button" id="closeButton" className="button-as-link" onClick={callback}>{buttonText}</button>
    </div>
);

ErrorNotification.propTypes = {
    text: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
}

export default ErrorNotification;