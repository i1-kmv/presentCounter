import React from 'react';
import s from './Visual.module.css'

class Visual extends React.Component {





    render = () => {

        let visualColor = () => {
            if (this.props.value===5) {
                return "max";

            }
        }
        return (
                <div className={s.visual}><span className={s[visualColor()]} >{this.props.value}</span></div>

        )
    };
}

export default Visual;

