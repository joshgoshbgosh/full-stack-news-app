import React, { Component } from 'react';
// import Cookies from 'js-cookie';
import Card from 'react-bootstrap/Card';
import './NewsList.css';













class Article extends Component {
  render() {
    return (
// <container>
//   <row>
//       <col>
      <Card>
        <Card.Img variant="top" src={this.props.article.image_url} />
        <Card.Body>
          <Card.Title>{this.props.article.title}</Card.Title>
          <Card.Text>{this.props.article.body}</Card.Text>
        </Card.Body>
      </Card>
  //     </col>
  //   </row>
  // </container>
    )
  }
}


class NewsList extends Component{
  render() {
    // console.log(this.props.articles)

    const articles = this.props.articles
      .filter(article => article.isTopStory)
      .map(article => <Article key={article.id} article={article} />);
      // console.log('articles', articles);

    const trending = this.props.articles
          .filter(article => !article.isTopStory)
          .map(article =>(

            <Card key={article.id}className="trend">
              <Card.Body>
                <Card.Title className="trendtext">{article.title}</Card.Title>
              </Card.Body>
            </Card>

            )
          );
    return(
      <React.Fragment>
      <div className="d-flex">
          <div className="d-flex flex-column">
            {articles}
          </div>
          <div className="d-flex flex-column">
            {trending}
          </div>
        </div>

      </React.Fragment>
    )
  }

}



export default NewsList;
