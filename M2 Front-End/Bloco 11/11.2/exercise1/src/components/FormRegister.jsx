import React, { Component } from 'react'

export default class FormRegister extends Component {

  state = {
    name: '',
    email: '',
  }

  handleSubmit = (event) => {
    const { target: { value } } = event
    event.preventDefault()
    const state = {
      name: value
    }
  }

  handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value})
  }

  render() {
    const { name, email } = this.state
    return (
      <>
        <section>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">
              <span>Nome: </span>
              <input
                type="name"
                name="name"
                maxLength={40}
                required
                value={name}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="email">
              <span>Email: </span>
              <input
                type="email"
                name="email"
                maxLength={50}
                required
                value={email}
                onChange={this.handleChange}
              />
            </label>
            <button
              type="submit"
              objState={this.handleSubmit}
            >
              Submit
            </button>
            
          </form>
        </section>
      </>
    )
  }
}