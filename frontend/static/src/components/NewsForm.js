import React, { Component } from 'react';

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
      <form className="col-12" onSubmit={(event) => {this.addArticle(event, this.state); this.setState({title:'', body:'', author:''})}}>
        <div className="form-group">
          <label className="form-title">Title</label>
            <input type="text" defaultValue={this.state.title} onChange ={this.handleChange} />
              </div>
                <div className="form-group">
                  <label className="form-body">Body</label>
                    <textarea rows="5" defaultValue={this.state.body} onChange={this.handleChange}/>
                      </div>
                        <div className="form-group">
                          <label className="form-author">Author</label>
                            <input type="text" defaultValue={this.state.author} onChange={this.handleChange}/>
                              </div>
                            <div className="form-group">
                          <label className="catg">Category</label>
                        <select className="form-control" id="category" name="category" defaultValue={this.state.category} onChange={this.handleChange}>
                      <option defaultValue="Music">Music</option>
                     <option defaultValue="Travel">Travel</option>
                   <option defaultValue="Coffee">Coffee</option>
                </select>
              </div>
            <div className="form-group">
          <label className="form-status">Status</label>
        <option defaultValue="draft">Draft</option>
      <option defaultValue="submitted">Submitted</option>
      </div>
    <button type="submit"className="sub btn btn-outline-dark">Submit</button>
  </form>
</React.Fragment>

    )
  }
}












export default NewsForm;
