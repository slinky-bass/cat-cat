import React from 'react';
import PropTypes from 'prop-types';

// ----- INTERNAL ----- \\
import SvgLoadingIcon from '../common/SvgLoadingIcon';

// ----- COMPONENTS ----- \\
const UpdatingNotification = ({ text }) =>  (
    <div className="updating-notification">
        <p className="updating-text">{text}</p>
        <SvgLoadingIcon />
    </div>
);


UpdatingNotification.propTypes = {
    text: PropTypes.string.isRequired,
}

export default UpdatingNotification;