import React from 'react';
import './ValueNumber.css'


class ValueNumber extends React.Component {

    render() {

        let {numbers, maxValue} = this.props;
        return (

            !this.props.error?
                <div className={numbers === maxValue ? "valueNumberMax" : "value-number"}>
                    {this.props.numbers}
                </div>
                : <div className={"error"} >
                    Incorrect value
                </div>
        )
    }
}

export default ValueNumber;
