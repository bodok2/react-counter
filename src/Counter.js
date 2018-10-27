import React, {Component} from "react";
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";

//const Counter = () => {
//    return(
//        <div className="counter">Licznik</div>
//    )
//}
//export default Counter;

class Counter extends Component {


    constructor(props) {
        super(props);

        this.state = {
            counterValue: 0,
        }
    }


updateOrResetCounter = (idOfbutton) => {

    if (idOfbutton === 1) {
        this.setState((prevState) => {
            return ({
                counterValue: prevState.counterValue + 1,
            })
        })
    } else if (idOfbutton === -1) {
        this.setState((prevState) => {
            return ({
                counterValue: prevState.counterValue - 1,
            })
        })
    } else if (idOfbutton === 0) {
        this.setState({
            counterValue: 0,
        })

    }

}
    

render() {
      return (
      <div className="counter">
        <Display currentValue={this.state.counterValue} />
        <ButtonsPanel updateCounter={this.updateOrResetCounter} />
     </div>
    )

}


}



export default Counter;