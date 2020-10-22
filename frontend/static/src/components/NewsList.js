import React, { Component } from 'react';
import Cookies from 'js-cookie';


class NewsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    }
  }

  componentDidMount() {

  }

render() {
  // const articles = this.state.articles.map
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://thumbs.dreamstime.com/t/coffee-photography-latte-art-luxury-cup-set-vintage-white-color-leaf-shape-decoration-stainless-steel-spoon-old-dark-170171740.jpg" />
  <Card.Body>
    <Card.Title>Is Coffee Good For Me</Card.Title>
    <Card.Text>
    Yes.

In moderation, coffee seems to be good for most people — that’s 3 to 5 cups daily, or up to 400 milligrams of caffeine.

“The evidence is pretty consistent that coffee is associated with a lower risk of mortality,” said Erikka Loftfield, a research fellow at the National Cancer Institute who has studied the beverage.

For years, coffee was believed to be a possible carcinogen, but the 2015 Dietary Guidelines helped to change perception. For the first time, moderate coffee drinking was included as part of a healthy diet. When researchers controlled for lifestyle factors, like how many heavy coffee drinkers also smoked, the data tipped in coffee’s favor.

A large 2017 review on coffee consumption and human health in the British Medical Journal also found that most of the time, coffee was associated with a benefit, rather than a harm. In examining more than 200 reviews of previous studies, the authors observed that moderate coffee drinkers had less cardiovascular disease, and premature death from all causes, including heart attacks and stroke, than those skipping the beverage.


    </Card.Text>

  </Card.Body>
</Card>
  )
}
}

export default NewsList;
