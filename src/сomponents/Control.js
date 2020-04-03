import React from 'react';
import s from './Control.module.css'

class Control extends React.Component {


    render = () => {
        let disabledInc = () => {
            if(this.props.value === 5) {
                return "disabled"
            }
        }
        let disabledReset = () => {
            if(this.props.value === 0) {
                return "disabled"
            }
        }
        return(
            <div className={s.control}>
                <button  className={s.inc} onClick={this.props.counterInc} disabled={disabledInc()}>inc</button>
                <button className={s.reset}  onClick={this.props.counterReset} disabled={disabledReset()}>reset</button>
            </div>
        )
    };
}


export default Control;
