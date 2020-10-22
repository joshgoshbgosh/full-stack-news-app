import React, { Component } from 'react';
import TravelList from './components/TravelList';
import MusicList from './components/MusicList';
import CoffeeList from './components/CoffeeList';
import './App.css';
import NewsForm from './components/NewsForm';
import NewsList from './components/NewsList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';





class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
      title: [],
      // image_url:
    }









  }

  componentDidMount() {
    fetch('api/v1/articles/')
      .then(response => response.json())
      .then(data => this.setState({articles: data}))
      .catch(error => console.log('Error:', error));
  }













  render() {
    return(
      <div>
        <NewsList articles={this.state.articles}/>

      </div>
    )
  }
}

export default App;
