import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default (props) => {
    const {size,color} = props;
    return(
        <FontAwesomeIcon icon={faHeart} size={size} color={color} />
    )
}