import React from "react";
import PropTypes from 'prop-types';

function SecondsCounter (props) {
    console.log(props);
    return (
        <section className="counter">
            <p>🕘</p>
            <p>{props.number6}</p>
            <p>{props.number5}</p>
            <p>{props.number4}</p>
            <p>{props.number3}</p>
            <p>{props.number2}</p>
            <p>{props.number1}</p>
        </section>
    )
}

SecondsCounter.PropTypes = {
    number1: PropTypes.number,
    number2: PropTypes.number,
    number3: PropTypes.number,
    number4: PropTypes.number,
    number5: PropTypes.number,
    number6: PropTypes.number,
}; 

export default SecondsCounter;