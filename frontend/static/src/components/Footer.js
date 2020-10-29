import React, { Component } from 'react';
import './Footer.css';
// import Cookies from 'js-cookie';


class Footer extends Component {

    render() {
      return (


        <React.Fragment>
          <footer>
          <div className="footLogo">
          <p className="footTheRecord">THE<span className="redWord">RECORD</span></p>
          <p className="footExchange">EXCHANGE</p>
          </div>
          <div className="footName">
          <p className="design">DESIGNED BY</p>
          <p className="josh">J<span className="redWord">O</span>S<span className="redWord">H</span> L<span className="redWord">A</span>N<span className="redWord">I</span>E<span className="redWord">R</span></p>
          </div>
          </footer>



        </React.Fragment>



      )
    }
}






    export default Footer;
