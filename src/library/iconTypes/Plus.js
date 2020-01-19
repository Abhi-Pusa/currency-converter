import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default (props) => {
    const {size,color} = props;
    return(
        <FontAwesomeIcon icon={faPlus} size={size} color={color} />
    )
}