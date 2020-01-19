import React from 'react';
import './IconButton.css';
import SolidIcon from './SolidIcon';
import RegularIcon from './RegularIcon';
import PlusIcon from './Plus';
import CloseIcon from './Close'; 

const buttonMap = {
    'solidHeart': SolidIcon,
    'regularHeart':RegularIcon,
    'plus':PlusIcon,
    'close':CloseIcon
}

export default (props) => {
    let {iconType,clickHander,size,color,clsName} = props;
    let ButtonType = buttonMap[iconType];
    return(
        <div>
            <button className={clsName} onClick={clickHander}>
                <ButtonType size={size} color={color} />
            </button>
        </div>
    )
}