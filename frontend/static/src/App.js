import React, { Component } from 'react';
import TravelList from './components/TravelList';
import MusicList from './components/MusicList';
import CoffeeList from './components/CoffeeList';
import './App.css';
import NewsForm from './components/NewsForm';
import NewsList from './components/NewsList';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';





class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
      title: [],
      page: 'articles',
      // image_url:
    }



    this.handleSelection = this.handleSelection.bind(this);





  }

  handleSelection(selection) {
    this.setState({page: selection});
  }

  componentDidMount() {
    fetch('api/v1/articles/')
      .then(response => response.json())
      .then(data => this.setState({articles: data}))
      .catch(error => console.log('Error:', error));
  }


  // {this.state.page === 'login' && <LoginForm signIn={this.signIn}/>}
  //
  //
  // {this.state.page === 'login' ? <LoginForm signIn={this.signIn}/> : <RegisterForm addUser={this.addUser}/>}
  //
  //
  // {html}





  // <NewsList articles={this.state.articles}/>
  // <NewsForm addArticle={this.addArticle}/>
     // <RegisterForm addUser={this.addUser}/>
     // <LoginForm signIn={this.signIn}/>


  render() {

    let html;
    if (this.state.page === 'login') {
      html = <LoginForm signIn={this.signIn}/>;
    } else if(this.state.page === 'register'){
        html = <RegisterForm addUser={this.addUser}/>;
    } else if(this.state.page === 'articles'){
       html = <NewsList articles={this.state.articles}/>
    } else if(this.state.page === 'post') {
      html = <NewsForm addArticle={this.addArticle}/>
    }
    return(
      <div>
      <Header header={this.state.articles} handleSelection={this.handleSelection}/>
      {html}

      </div>
    )
  }
}

export default App;
