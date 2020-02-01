import React from 'react';
import './Settings.css'


class Settings extends React.Component {

    render() {

        let showError = this.props.error? "errorInputSettings": "settings"

        let {maxValue, startValue} = this.props;
        return (
                <div className="settings" >
                    <div> Max value
                        <input className={showError} onChange={this.props.changeMaxValue}
                                           type="number" placeholder="Enter value"
                                           value={maxValue}/>
                    </div>
                    <div> Start value
                        <input className={showError} onChange={this.props.changeStartValue}
                                             type="number" placeholder="Enter value"
                                             value={startValue}/>
                    </div>
                </div>
        )
    }
}


export default Settings;
