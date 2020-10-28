import React, { Component } from 'react';
import './LoginForm.css';
import Cookies from 'js-cookie';
import UserArticles from './UserArticles';

class LoginForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);

  }

  handleChange (event){
    this.setState({[event.target.name]: event.target.value});
}
async handleSignIn(event){

  event.preventDefault();
  const csrftoken = Cookies.get('csrftoken');
  const response = await fetch('/api/v1/rest-auth/login/', {
     method: 'post',
     headers: {
       'Content-Type':'application/json',
        'X-CSRFToken': csrftoken,
      },
     body: JSON.stringify(this.state)
  });

  const data = await response.json();
  Cookies.set('Authorization', `Token ${data.key}`);

  // this.props.fetchUserArticles();

};


render() {
  return (
    <React.Fragment>
      <div className="form-the-record">
      <p className="log-logo">THE <span className="special-word">RECORD</span></p>
      </div>
      <div className="form-exchange">
      <p>EXCHANGE</p>
      </div>
    <container>
      <form className="col-12 col-md-6 mb-5" onSubmit={this.handleSignIn}>
        <div className="form-group">
          <label className="form-userName">LOG IN</label>
          <input type="text" placeholder="Enter Username..." name="username" value={this.state.username} onChange ={this.handleChange} />
        </div>
        <div className="form-group">
          <label className="form-password1"></label>
          <input type="text" placeholder="Enter Password..." name="password" value={this.state.password} onChange ={this.handleChange} />
        </div>
        <button type="submit"className="sub btn btn-dark"onClick={()=> this.props.handleSelection('login')}>Submit</button>
      </form>
    </container>
  </React.Fragment>

                        )
                      }
                    }
export default LoginForm;
