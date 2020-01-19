import React from 'react';
import './IconButton.css';
import SolidIcon from '../IconTypes/SolidIcon';
import RegularIcon from '../IconTypes/RegularIcon';
import PlusIcon from '../IconTypes/Plus';
import CloseIcon from '../IconTypes/Close'; 

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