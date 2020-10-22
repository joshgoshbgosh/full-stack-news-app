import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Card from 'react-bootstrap/Card';

class Article extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.article.image_url} />
        <Card.Body>
          <Card.Title>{this.props.article.title}</Card.Title>
          <Card.Text>{this.props.article.body}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

class NewsList extends Component{
  render() {
    const articles = this.props.articles.map(article => <Article key={article.id} article={article} />);
    console.log('articles', articles);

    return(
      <React.Fragment>
        {articles}
      </React.Fragment>
    )
  }

}


export default NewsList;
