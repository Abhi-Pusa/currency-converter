import React from 'react';
import './Modal.css';
import IconButton from '../iconButton/IconButton';

export default (props) => {
    const {children,onClickHandler} = props;
    return (
        <div className="modalWrapper">
            <div className="modalContent">
                <div><IconButton iconType={'close'} size='2x' color='black' clsName="btn-icons-modal" clickHander={() => onClickHandler(false,null)} /></div>
                {children}
            </div>
        </div>
    )
}