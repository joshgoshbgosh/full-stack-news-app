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
                        <select className="form-control" id="category" name="category" onChange={this.handleInput}>
                      <option>Select Category</option>
                       <option value="Music">Music</option>
                     <option value="Travel">Travel</option>
                   <option value="Coffee">Coffee</option>
                </select>
                    </div>
                  <div>
                <label>Status</label>
                <select className="form-control" id="status" name="status" onChange={this.handleInput}>
              <option>Select Status</option>
                <option value="Draft">Draft</option>
                 <option value="Submitted">Submitted</option>
                 <option value="Published">Published</option>
               </select>
               </div>
        <button type="submit"className="sub btn btn-outline-dark">Submit</button>
</form>


    )
  }
}












export default NewsForm;
