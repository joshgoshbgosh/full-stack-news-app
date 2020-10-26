import React, { Component } from 'react';
import './Header.css';




class Header extends Component {

    render() {
      return (
        <React.Fragment>
        <header>
        <h1>THE <span className="special-word">RECORD</span>EXCHANGE</h1>

          <nav>
            <a href="/" onClick={() => this.props.handleSelection('articles')}>HOME</a>
            <a href="/music">MUSIC</a>
            <a href="/coffee">COFFEE</a>
            <a href="/travel">TRAVEL</a>
          </nav>
        <button className="create-account" onClick={()=> this.props.handleSelection('register')}>CREATE ACCOUNT</button>
        <button className="log-in" onClick={()=> this.props.handleSelection('login')}>LOG IN</button>
        <div className="black"></div>
        <div className="top-litter">
        <p className="top">TOP STORIES</p>
        <p className="pick">TRENDING</p>
        </div>
        </header>

        </React.Fragment>
      )
}
}





        export default Header;
