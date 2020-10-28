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
import UserArticles from './components/UserArticles';
import Cookies from 'js-cookie';
import Footer from './components/Footer';




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
    this.fetchUserArticles = this.fetchUserArticles.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleSelection(selection) {
    if (selection === 'myArticle'){
      this.fetchUserArticles();
    }
    this.setState({page: selection});
  }


  componentDidMount() {
    if(Cookies.get('Authorization')) {
      this.fetchUserArticles();
    } else {
      this.fetchArticles();
    }
  }

  fetchArticles() {
    fetch('api/v1/articles/')
      .then(response => response.json())
      .then(data => this.setState({articles: data}))
      .catch(error => console.log('Error:', error));
  }

  fetchUserArticles() {
    fetch('/api/v1/articles/user/')
    .then(response => response.json())
    .then(data => this.setState({articles: data}))
    .catch(error => console.log('Error:', error));
  }

  async handleLogOut(event){
    // event.preventDefault();
    const csrftoken = Cookies.get('csrftoken');
    const response = await fetch('/api/v1/rest-auth/logout/', {
       method: 'post',
       headers: {
         'Content-Type':'application/json',
          'X-CSRFToken': csrftoken,
        },

    });

    const data = await response.json();
    console.log(data);
    Cookies.remove('Authorization');

    this.fetchArticles();

  };


  // <NewsList articles={this.state.articles}/>
  // <NewsForm addArticle={this.addArticle}/>
     // <RegisterForm addUser={this.addUser}/>
     // <LoginForm signIn={this.signIn}/>


  render() {

    let html;
    if (this.state.page === 'login') {
      html = <LoginForm signIn={this.signIn} handleSelection={this.handleSelection}/>;
    } else if(this.state.page === 'register'){
        html = <RegisterForm addUser={this.addUser}/>;
    } else if(this.state.page === 'articles'){
       html = <NewsList articles={this.state.articles}/>
    } else if(this.state.page === 'post') {
      html = <NewsForm addArticle={this.addArticle}/>
    }else if(this.state.page === 'myarticles'){
      html =<UserArticles addArticle={this.addArticle}/>
    }

    return(
      <div>
      <Header header={this.state.articles} handleSelection={this.handleSelection} handleLogOut={this.handleLogOut}/>
      {html}
      <Footer/>
      </div>
    )
  }
}

export default App;
