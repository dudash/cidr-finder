import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Netmask } from 'netmask'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { inputcidr: [172, 31, 0, 0], inputmask: 16 }
    this.handleIPChange = this.handleIPChange.bind(this);
  }

  handleIPChange(event) {
    var valueForcedNumeric = +event.target.value.replace(/[^0-9]/g, '')
    if (event.target.attributes['quad-index'].value === "mask") {
      if (valueForcedNumeric <= 32) { this.setState({inputmask: valueForcedNumeric}) }
    } else {
      if (valueForcedNumeric <= 255) {
        var cidr = this.state.inputcidr;
        cidr[event.target.attributes['quad-index'].value] = valueForcedNumeric;
        this.setState({inputcidr: cidr});
      }
    }
  }

  render() {
    var checkThisCIDR = this.state.inputcidr.join('.') + '/' + this.state.inputmask;
    var netmaskDetails = new Netmask(checkThisCIDR)
    console.log("checking " + checkThisCIDR);

    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Let's find that CIDR</h1>
        </header>
        <p className="App-intro">Type in a CIDR block to see more info about it.</p>

        <div className="IPAddress">
          <span className="quad">
            <input className="quad" type="text" value={this.state.inputcidr[0]} quad-index={0} onChange={this.handleIPChange}/>
            <span className="dot">.</span>
          </span>
          <span className="quad">
            <input className="quad" type="text" value={this.state.inputcidr[1]} quad-index={1} onChange={this.handleIPChange}/>
            <span className="dot">.</span>
          </span>
          <span className="quad">
            <input className="quad" type="text" value={this.state.inputcidr[2]} quad-index={2} onChange={this.handleIPChange}/>
            <span className="dot">.</span>
          </span>
          <span className="quad">
            <input className="quad" type="text" value={this.state.inputcidr[3]} quad-index={3} onChange={this.handleIPChange}/>
            <span className="dot">/</span>
          </span>
          <input className="mask" type="text" value={this.state.inputmask} quad-index="mask" onChange={this.handleIPChange}/>
        </div>

        <div className="Bits">
          <ol>
            <li className="octet"><ol>12345678</ol></li>
            <li className="octet"><ol>12345678</ol></li>
            <li className="octet"><ol>12345678</ol></li>
            <li className="octet"><ol>12345678</ol></li>
          </ol>
        </div>

        <NetmaskDetails details={netmaskDetails}></NetmaskDetails>
      </div>
    );
  }
}

class NetmaskDetails extends Component {
  render() {
    return (
        <div className="NetmaskDetails">
          <span className="block">
            <span className="value">{this.props.details.mask}</span>
            <span className="label">Netmask</span>
          </span>
          <span className="block">
            <span className="value">{this.props.details.first}</span>
            <span className="label">First IP</span>
          </span>
          <span className="block">
            <span className="value">{this.props.details.last}</span>
            <span className="label">Last IP</span>
          </span>
          <span className="block">
            <span className="value">{this.props.details.size.toLocaleString()}</span>
            <span className="label">Count</span>
          </span>
        </div>
    );
  }
}

export default App;
