import React from 'react';
import './App.css';
import ValueNumber from "./Right-field/ValueNumber";
import Button from "./Right-field/Button";
import Header from "./Header"
import Settings from "./Left-field/Settings";
import ButtonSettings from "./Left-field/ButtonSettings";


class App extends React.Component {

    state = {
        numbers: 0,
        maxValue: 5,
        startValue: 0,
        editMode: false,
        error: false,
    }

    onAddClick = () => {
        if (this.state.numbers < this.state.maxValue) {
            this.setState({
                numbers: this.state.numbers + 1
            })
        } else {
            alert('Stop')
        }
    }

    changeMaxValue = (e) => {
        this.activateEditMode()
        if (e.target.value < 0 || this.state.startValue < 0) {
            this.setState({
                error: true,
            })
        } else {
            this.setState({
                error: false
            })
        }
        this.setState({
            maxValue: Number(e.target.value)
        })
    }

    changeStartValue = (e) => {
        this.activateEditMode()
        if (e.target.value < 0 || this.state.maxValue < 0) {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                error: false
            })
        }
        this.setState({
            startValue: Number(e.target.value)
        })
    }

    onClickButton = () => {
        this.setState({
            numbers: 0
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        if (this.state.numbers === this.state.maxValue) {
            alert('Incorrect Value')
        }
        this.setState({
            editMode: false,
            numbers: this.state.startValue
        })
    }


    render = () => {
        return (

            <div className="counter-page">
                <Header/>
                <div className="left-display">
                    <Settings error={this.state.error}
                              changeStartValue={this.changeStartValue}
                              changeMaxValue={this.changeMaxValue}
                              maxValue={this.state.maxValue}
                              startValue={this.state.startValue}/>
                    <ButtonSettings error={this.state.error}
                                    deactivateEditMode={this.deactivateEditMode}
                                    editMode={this.state.editMode}/>
                    <div className="value">
                        <ValueNumber error={this.state.error}
                                     numbers={this.state.numbers}
                                     maxValue={this.state.maxValue}
                                     startValue={this.state.startValue}
                        />
                        <Button editMode={this.state.editMode}
                                name='Increase'
                                onAddClick={this.onAddClick}/>}
                        <Button editMode={this.state.editMode}
                                name='Reset'
                                onAddClick={this.onClickButton}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default App;
