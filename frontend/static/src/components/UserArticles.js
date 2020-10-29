import React, { Component } from 'react';
// import Article from './NewsList';
import Card from 'react-bootstrap/Card';


class UserArticles extends Component {
  constructor(props){
    super(props)

    this.state ={
    articles: [],



    }
  }
  componentDidMount(){
    fetch('/api/v1/articles/user/')
    .then(response => response.json())
    .then(data => this.setState({articles: data}))
    .catch(error => console.log('Error:', error));
    console.log(this.state)
  }

  render(){
    const articles = this.state.articles.map(article =>
      <Card key={article.id}>
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.body}</Card.Text>
        </Card.Body>
      </Card>
    );
      console.log('articles', articles);
    return(
      <React.Fragment>
      {articles}
      </React.Fragment>
    )
  }
}
export default UserArticles;
