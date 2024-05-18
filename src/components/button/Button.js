// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const PackageButton = ({ onClick }) => {
    return (
        <button className="custom-button" onClick={onClick}>
            Click Me
        </button>
    );
};

PackageButton.propTypes = {
    onClick: PropTypes.func
};

export default PackageButton;
