import React from 'react';
import './Modal.css';

export default (props) => {
    const {children} = props;
    return (
        <div className="modalWrapper">
            <div className="modalContent">
                {children}
            </div>
        </div>
    )
}