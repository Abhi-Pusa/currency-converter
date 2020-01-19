import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default (props) => {
    const {size,color} = props;
    return(
        <FontAwesomeIcon icon={faTimes} size={size} color={color} />
    )
}