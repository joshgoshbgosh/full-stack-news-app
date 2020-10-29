import React, { Component } from 'react';
import './Header.css';
import Cookies from 'js-cookie';




class Header extends Component {

    render() {
      const isAuth = Cookies.get('Authorization');
      return (
        <React.Fragment>
        <header>
        <h1>THE <span className="special-word">RECORD</span>EXCHANGE</h1>

          <nav>
            {
              !!isAuth ?
              (
                <React.Fragment>
                  <a href="/all">ALL</a>
                  <a href="/draft">DRAFT</a>
                  <a href="/submitted">SUBMITTED</a>
                  <a href="/published">PUBLISHED</a>
                  <button className="write" onClick={()=> this.props.handleSelection('post')}>Write Article</button>
                  <button className="log-out" onClick={this.props.handleLogOut}>Log Out</button>
                </React.Fragment>
              ) :
              (
                <React.Fragment>
                  <a href="/" onClick={() => this.props.handleSelection('articles')}>HOME</a>
                  <a href="/music">MUSIC</a>
                  <a href="/coffee">COFFEE</a>
                  <a href="/travel">TRAVEL</a>
                  <button className="create-account" onClick={()=> this.props.handleSelection('register')}>CREATE ACCOUNT</button>
                  <button className="log-in" onClick={()=> this.props.handleSelection('login')}>LOG IN</button>
                </React.Fragment>
              )
            }
          </nav>

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
