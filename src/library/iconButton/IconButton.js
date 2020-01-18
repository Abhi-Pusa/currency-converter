import React from 'react';
import './IconButton.css';
import SolidIcon from './SolidIcon';
import RegularIcon from './RegularIcon';
import PlusIcon from './Plus';

const buttonMap = {
    'solidHeart': SolidIcon,
    'regularHeart':RegularIcon,
    'plus':PlusIcon
}

export default (props) => {
    let {iconType,clickHander} = props;
    let ButtonType = buttonMap[iconType];
    return(
        <div>
            <button onClick={clickHander}>
                {/* {iconType == 'solid'?(<SolidIcon />):(<RegularIcon />)} */}
                <ButtonType />
            </button>
        </div>
    )
}