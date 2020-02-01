import React from 'react';
import './Button.css'

class Button extends React.Component {

    render (){

        return (

                <div className="buttons">
                    <button disabled = {this.props.editMode}
                        onClick={this.props.onAddClick}>
                       {this.props.name}</button>
                    </div>

            )
        }
        }
export default Button;



