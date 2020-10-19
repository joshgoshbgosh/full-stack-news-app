import React, { Component } from 'react';
import TravelList from './components/TravelList';
import MusicList from './components/MusicList';
import CoffeeList from './components/CoffeeList';
import './App.css';
import NewsForm from './components/NewsForm';
import StoryList from './components/StoryList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stories : [],
    }



componentDidMount() {
  fetch('api/v1/')
  .then(response => response.json())
  .then(data => this.setState({stories: data}))
  .catch(error => console.log('Error:', error));
}




  }
}
export default App;
