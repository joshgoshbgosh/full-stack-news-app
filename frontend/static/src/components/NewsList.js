import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Card from 'react-bootstrap/Card';
import './NewsList.css';













class Article extends Component {
  render() {
    return (
      <Card>
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

    const trending = selection
          .filter(articles => !articles.isTopStory && article.status === 'draft')
          .map(articles =>(
            <Card className="trend">
              <Card.Img className="trend-img"variant="top" src={this.props.article.image_url} />
              <Card.Body className="trend-body">
                <Card.Title className="trend-title">{this.props.article.title}</Card.Title>
                <Card.Text className="trend-text">{this.props.article.body}</Card.Text>
              </Card.Body>
            </Card>
            )
          );
    return(
      <React.Fragment>
      <header>
      <h1>THE <span class="special-word">RECORD</span> EXCHANGE</h1>

        <nav>
          <a href="#">HOME</a>
          <a href="#">MUSIC</a>
          <a href="#">COFFEE</a>
          <a href="#">TRAVEL</a>
        </nav>

      <button className="log-in">LOG IN</button>
      <div className="black"></div>
      <div className="top-litter">
      <p className="top">TOP STORIES</p>
      <p className="pick">TRENDING</p>
      </div>
      </header>
        {articles}
      </React.Fragment>
    )
  }

}



export default NewsList;
