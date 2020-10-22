import React, { Component } from 'react';
import TravelList from './components/TravelList';
import MusicList from './components/MusicList';
import CoffeeList from './components/CoffeeList';
import './App.css';
import NewsForm from './components/NewsForm';
import NewsList from './components/StoryList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';




// componentDidMount() {
//   fetch('api/v1/')
//   .then(response => response.json())
//   .then(data => this.setState({stories: data}))
//   .catch(error => console.log('Error:', error));
// }
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
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
        <NewsList/>

      </div>
    )
  }
}

export default App;
