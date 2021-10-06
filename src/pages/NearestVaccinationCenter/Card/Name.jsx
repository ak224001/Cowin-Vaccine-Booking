import React from 'react';
import './Name.css';

function Name({className,length,name}) {
    return (
        <span className={className}>
                { length > 12 ? name.substring(0,12)+"..." : name}
        </span>
    );
}

export default Name;