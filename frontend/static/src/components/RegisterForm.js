import React, { Component } from 'react';
import Cookies from 'js-cookie';
import './RegisterForm.css';

class RegisterForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',

    }


    this.handleChange = this.handleChange.bind(this)
  }


  handleChange (event){
    this.setState({[event.target.name]: event.target.value});
}


  async addUser(event){

    event.preventDefault();
    const csrftoken = Cookies.get('csrftoken');
    const response = await fetch('/api/v1/rest-auth/registration/', {
       method: 'post',
       headers: {
         'Content-Type':'application/json',
          'X-CSRFToken': csrftoken,
        },
       body: JSON.stringify(this.state)
    });

    const data = await response.json();
    Cookies.set('Authorization', `Token ${data.key}`);
};

      render() {
        return (
          <React.Fragment>
          <div className="form-the-record">
          <p>THE <span className="special-word">RECORD</span></p>
          </div>
          <div className="form-exchange">
          <p>EXCHANGE</p>
          </div>
        <container>
          <form className="col-12 col-md-6 mb-5" onSubmit={(event) => {this.addUser(event, this.state); this.setState({username:'', email:'', password1:'', password2: ''})}}>
            <div className="form-group">
              <label className="form-userName">CREATE ACCOUNT</label>
                <input type="text" placeholder="Enter Username..."name="username" defaultValue={this.state.userName} onChange ={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-email"></label>
                      <input type="text" placeholder="Enter Email..."name="email" defaultValue={this.state.email} onChange ={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <label className="form-password1"></label>
                            <input type="text" placeholder="Enter Password..." name="password1" defaultValue={this.state.password1} onChange ={this.handleChange} />
                              </div>
                              <div className="form-group">
                                <label className="form-password2"></label>
                                  <input type="text" placeholder="Re-enter Password..." name="password2" defaultValue={this.state.title} onChange ={this.handleChange} />
                                    </div>
                                    <button type="submit"className="sub btn btn-dark">Submit</button>
                                  </form>
                                  </container>
                                </React.Fragment>

                                    )
                                  }
                                }
export default RegisterForm;
