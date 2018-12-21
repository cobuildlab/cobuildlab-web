import React, { Component } from 'react'
import { Title, Subtitle } from 'bloomer'
import { navigate } from 'gatsby'
import { toast } from 'react-toastify'

export default class NewLadingForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      comment: '',
      email: '',
      phone: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e, landingName) => {
    e.preventDefault()

    if (this.state.firstName.length <= 0) {
      toast.error("First name can't be empty", {
        position: 'bottom-right',
      })
      return
    }

    if (this.state.lastName.length <= 0) {
      toast.error("Last name can't be empty", {
        position: 'bottom-right',
      })
      return
    }

    if (this.state.email.length <= 0) {
      toast.error("Email can't be empty", {
        position: 'bottom-right',
      })
      return
    }

    if (this.state.comment.length <= 0) {
      toast.error("Comment can't be empty", {
        position: 'bottom-right',
      })
      return
    }

    // const url = 'https://api.cobuild-lab.com/landing/contact'
    const url = 'http://localhost:3000/landing/contact'

    const data = {
      landingName,
      ...this.state,
    }

    const settings = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }

    fetch(url, settings)
      .then(res => res.json())
      .then(response => {
        if (response.statusCode >= 400) {
          toast.error(response.message, {
            position: 'bottom-right',
          })
        } else {
          toast.success(response.message, {
            position: 'bottom-right',
          })

          navigate('/thanks-contact')
        }
      })
  }

  render() {
    const { landingName } = this.props
    return (
      <div>
        <div className="Aligner">
          <div className="colunm is-4">
            <Title className="has-text-centered title-form-contact">
              Contact us for a <span className="free">FREE</span> <br />{' '}
              consultation!
            </Title>
            <p className="subtitle-info">
              Call Us to: <span className="free">(786) 991-3467</span> or <br />{' '}
              fill out this form and we will get in touch with you.{' '}
            </p>
          </div>
          <br />
          <form
            className="has-text-centered"
            onSubmit={e => {
              this.onSubmit(e, landingName)
            }}
          >
            <div className="group">
              <input
                type="text"
                required
                name="firstName"
                value={this.state.firstName}
                onChange={e => this.handleChange(e)}
              />
              <span className="highlight" />
              <span className="bar" />
              <label>First Name</label>
            </div>

            <div className="group">
              <input
                type="text"
                required
                name="lastName"
                value={this.state.lastName}
                onChange={e => this.handleChange(e)}
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Last Name</label>
            </div>

            <div className="group">
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Email</label>
            </div>

            <div className="group">
              <input
                type="number"
                name="phone"
                value={this.state.phone}
                onChange={e => this.handleChange(e)}
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Phone</label>
            </div>

            <div className="group">
              <input
                type="text"
                required
                name="comment"
                value={this.state.comment}
                onChange={e => this.handleChange(e)}
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Comment or Message</label>
            </div>
            <button
              className="button is-primary is-medium is-rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div>
            <br />
            <Subtitle className="has-text-centered is-marginless has-text-white m-20">
              Privacy Policy
            </Subtitle>
            <p className="has-text-centered has-text-white is-marginless">
              Here you can access the information about how we use your data.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
