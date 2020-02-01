import React from 'react';
import './ButtonSettings.css';

class ButtonSettings extends  React.Component {

    render (){

        debugger;

        return <div className="button">
            <button
                disabled = {!this.props.editMode|| this.props.error}
                onClick = {this.props.deactivateEditMode}>
                Settings
            </button>
        </div>
    }
}
export default ButtonSettings;
