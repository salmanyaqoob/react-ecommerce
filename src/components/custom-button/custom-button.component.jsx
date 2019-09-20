import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({ value, loginWithGoogle, ...otherButtonProps}) => (
    <button className={`${loginWithGoogle?'google-sign-in':''} custom-button`} {...otherButtonProps}>{value}</button>
);

export default CustomButton;