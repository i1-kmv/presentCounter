import React from 'react';
import logo from './logo.svg';
import './App.css';
import Visual from "./сomponents/Visual";
import Control from "./сomponents/Control";
import s from "./сomponents/Visual.module.css";

class App extends React.Component {

    state = {
        value: 0
    };



    counterReset = () => {
        let newValue = 0;
        this.setState({
            value: newValue
        });
    };



    counterInc = () => {
        if (this.state.value < 5) {
            let newValue = ++this.state.value;
             this.setState({
                value: newValue
            });
        } else {
           return null
            };
        }




    render = () => {
        return(
            <div className = "App">
                <div className="wrapper">
                <Visual   value = {this.state.value}  />
                <Control  counterInc={this.counterInc} counterReset={this.counterReset} value = {this.state.value}  />
                </div>
             </div>
                 )
    }
};


export default App;
