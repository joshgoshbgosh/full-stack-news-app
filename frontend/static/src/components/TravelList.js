import React, {Component} from 'react';
import Cookies from 'js-cookie';
import Card from 'react-bootstrap/Card';

class TravelList extends Component {

  render(){

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













export default TravelList;
