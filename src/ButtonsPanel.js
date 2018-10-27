import React, {Component} from "react";



class ButtonsPanel extends Component {


    updateCounter = (buttonId) => {
        console.log("Klik wewnątrz ButtonsPanel" + buttonId);
        this.props.updateCounter(buttonId);
    }

    render() {
        return(
            <div className="buttonsPanel">
            <button onClick={ () => this.updateCounter(1)}>
                    Zwiększ o 1
                </button>
                <button onClick={ () => this.updateCounter(-1)}>
                    Zmniejsz o 1
                </button>
                <button onClick={ () => this.updateCounter(0)}>
                    Reset
                </button>
            </div>
        )
    }
}


export default ButtonsPanel;