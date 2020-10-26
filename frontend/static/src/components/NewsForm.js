import React, { Component } from 'react';
import './NewsForm.css';
class NewsForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      category: 'Music',
      status: 'Draft',
      isTopStory: false,
      author: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange (event){
    this.setState({[event.target.name]: event.target.value});
}


  addArticle(event){
    event.preventDefault();

    const formData = new FormData()
    formData.append('title', 'testTitle')

    fetch('/api/v1/articles/', {
       method: 'post',
       headers: {'Content-Type':'application/json'},
       body: formData
       // JSON.stringify({
       //
       // })
    });
};

  render() {
    return (
      <React.Fragment>
      <form className="news-form" onSubmit={(event) => {this.addArticle(event, this.state); this.setState({title:'', body:'', author:''})}}>
      <div className="left">
      <p className="logo-form">THE<span className="special-word">RECORD</span></p>
      <p className="logo2-form">EXCHANGE</p>
        <div className="form-group">
          <label className="news-title">Title</label>
            <input type="text"defaultValue={this.state.title} onChange ={this.handleChange} />
              </div>
                <div className="form-group">
                          <label className="news-title">Author</label>
                            <input type="text"defaultValue={this.state.author} onChange={this.handleChange}/>
                              </div>
                            <div className="form-group">
                          <label className="news-title">Category</label>
                        <select className="news-option" id="category" name="category" defaultValue={this.state.category} onChange={this.handleChange}>
                      <option defaultValue="Music">Music</option>
                     <option defaultValue="Travel">Travel</option>
                   <option defaultValue="Coffee">Coffee</option>
                </select>
              </div>
            <div className="form-group">
          <label className="news-title">Status</label>
        <select className="news-option" id="status" name="status" defaultValue={this.state.status} onChange={this.handleChange}>
        <option defaultValue="draft">Draft</option>
        </select>
        </div>
        </div>
        <div className="right">
        <div className="body">
          <label className="news-body">Body</label>
            <textarea className="news-text" rows="5" defaultValue={this.state.body} onChange={this.handleChange}/>
              </div>

    <button type="submit"className="sub btn btn-dark">Submit</button>
    </div>
  </form>
</React.Fragment>

    )
  }
}












export default NewsForm;
