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
      <form className="col-6" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Title</label>
            <input type="text" value={this.state.title} onChange ={this.handleTitleChange} />
              </div>
                <div>
                  <label>Body</label>
                    <textarea rows="5" value={this.state.body} onChange={this.handleBodyChange}></textarea>
                      </div>
                        <div>
                        <label className="catg">Category</label>
                      <input rows="5"type="text" value={this.state.category} onChange ={this.handleCategoryChange} />
                    </div>
                  <div>
                <label>Status</label>
              <div>
            <button type="draft"className="draft btn btn-outline-dark">Draft</button>
          <button type="submission"className="btn btn-outline-dark">Submission</button>
        <button type="published" className="pub btn btn-outline-dark">Published</button>
      </div>
    </div>
  <button type="submit"className="sub btn btn-outline-dark">Submit</button>
</form>


    )
  }
}












export default NewsForm;
