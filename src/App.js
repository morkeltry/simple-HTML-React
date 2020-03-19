import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import './fonts.css';


class App extends Component {

  doSubmit (ev) {
    ev.preventDefault();
    alert("You don't have a quote - it's not a real website, silly!");
  }

  getValue () {
      return this.refs.YYYY.value;
    }


  render() {
    return (
      <div className="main">
        <header>
          <img src={logo} className="logo" alt="logo"/>
        </header>
        <div className="grid-space"></div>
        <div className="grid-space"></div>
        <div className="form-find-quote">
          <h1 className="large-margin-text">
            ACCESS YOUR
          <br />
          <span className="heavy-text">
            ZERO DEPOSIT QUOTE
          </span>
          </h1>
          <div className="form-find-quote__inner">
            <form action="#" method="POST">
              <h2>
                Enter your date of birth
              </h2>
              <div className="date-row">
                <span className="date-row__DD">
                  <input type="number" min="1" max="31" size="2" name="DD" id="DD" placeholder="DD"></input>
                  <label htmlFor="DD">DAY</label>
                </span>
                <span className="date-row__MM">
                  <input type="number" min="1" max="12" size="2" name="MM" id="MM" placeholder="MM"></input>
                  <label htmlFor="MM">MONTH</label>
                </span>
                <span className="date-row__YYYY">
                  <input type="number" min="1888" max="2020" size="4" name="YYYY" id="YYYY" placeholder="YYYY"
                    ref={ (refYyyy)=> {this.YYYY = refYyyy} }
                    onFocus={ ()=> {this.YYYY.defaultValue="1989"} }
                  ></input>
                  <label htmlFor="YYYY">YEAR</label>
                </span>
              </div>
              <input type="submit" name="retrieve-quote" value="ACCESS QUOTE" onClick={this.doSubmit}></input>
            </form>
            <div className="small-text">
              <div className="large-margin-text">
                Trouble accessing your quote?
              </div>
              <div>
                Contact customer support on 0333 200 2541
              </div>
              <div>
                Or email <span className="highlight-text heavy-text">
                  support@zerodeposit.com
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
