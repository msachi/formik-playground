import React from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.firstName);
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" value={this.state.firstName} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default NameForm