import React from 'react';

export default (props) => {
    let { changeHandler, children, id } = props;
    return (
        <select id={id} onChange={changeHandler}>
            <option>select</option>
            {children}
        </select>
    )
}