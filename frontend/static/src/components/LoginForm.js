import React, { Component } from 'react';

class LoginForm extends Component {

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


  addUser(event){

    event.preventDefault();
console.log(this.state)
    const formData = new FormData()
    formData.append('username', this.state.username)
    formData.append('email', this.state.email)
    formData.append('password1', this.state.password1)
    formData.append('password2', this.state.password2)

    fetch('/api/v1/rest-auth/registration/', {
       method: 'post',
       credentials: 'same-origin',
       // headers: {'Content-Type':'application/json'},
       body: formData
       // JSON.stringify({
       //
       // })
    });
};

      render() {
        return (
          <React.Fragment>
          <form className="col-12" onSubmit={(event) => {this.addUser(event, this.state); this.setState({username:'', email:'', password1:'', password2: ''})}}>
            <div className="form-group">
              <label className="form-userName">Username</label>
                <input type="text" name="username" defaultValue={this.state.userName} onChange ={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-email">Email</label>
                      <input type="text" name="email" defaultValue={this.state.email} onChange ={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <label className="form-password1">Password1</label>
                            <input type="text" name="password1" defaultValue={this.state.password1} onChange ={this.handleChange} />
                              </div>
                              <div className="form-group">
                                <label className="form-password2">Password2</label>
                                  <input type="text" name="password2" defaultValue={this.state.title} onChange ={this.handleChange} />
                                    </div>
                                    <button type="submit"className="sub btn btn-outline-dark">Submit</button>
                                  </form>
                                </React.Fragment>

                                    )
                                  }
                                }
export default LoginForm;
