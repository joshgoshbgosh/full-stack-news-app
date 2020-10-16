import React, { Component } from 'react';

class NewsForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      category: '',
      status: 'Draft',
    }
  }


handleTitleChange = (event) => {
  this.setState({
    title: event.target.value
  })
}

handleBodyChange = (event) => {
  this.setState({
    body: event.target.value
  })
}

handleCategoryChange = (event) => {
  this.setState({
    category: event.target.value
  })
}

handleStatusChange = (event) => {
  this.setState({
    status: event.target.value
  })
}

handleSubmit = (event) => {
  alert(`${this.state.tite} ${this.state.body} ${this.state.category} ${this.state.status}`)
  event.preventDefault()
}


  render() {
    return (
      <form className="col-12" onSubmit={this.handleSubmit}>
        <div>
          <label>Title</label>
            <input type="text" value={this.state.title} onChange ={this.handleTitleChange} />
              </div>
                <div>
                  <label>Body</label>
                    <textarea value={this.state.body} onChange={this.handleBodyChange}></textarea>
                      </div>
                        <div>
                        <label>Category</label>
                      <input type="text" value={this.state.category} onChange ={this.handleCategoryChange} />
                    </div>
                  <div>
                <label>Status</label>
              <button type="draft">Draft</button>
            <button type="submission">Submission</button>
          <button type="published">Published</button>
        </div>
      <button type="submit">Submit</button>
    </form>


    )
  }
}












export default NewsForm;
