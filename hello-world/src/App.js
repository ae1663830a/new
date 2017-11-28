import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const style = {width: '100px', padding: '1px'};


const Besisukantis = (props) => {
    return <img src={logo} className="App-logo" style={style} alt="logo"/>
}

const Nesisukantis = (props) => {
    return <img src={logo} className="" style={style} alt="logo"/>
}

class App extends Component {

    // constructor () {super}


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Besisukantis/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
