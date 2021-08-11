import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    isSubmitClicked: false,
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({firstNameError: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({lastNameError: !isValidLastName})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isSubmitClicked: !prevState.isSubmitClicked,
      firstName: '',
      lastName: '',
    }))
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isSubmitClicked: true})
    } else {
      this.setState({
        firstNameError: !isValidFirstName,
        lastNameError: !isValidLastName,
        isSubmitClicked: false,
      })
    }
  }

  renderLastNameField = () => {
    const {lastName, lastNameError} = this.state
    const errorHighlight = lastNameError ? 'error-field' : ''

    return (
      <>
        <label htmlFor="lastName" className="input-label">
          LAST NAME
        </label>
        <input
          type="text"
          className={`first-name-input-field ${errorHighlight}`}
          id="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </>
    )
  }

  renderFirstNameField = () => {
    const {firstName, firstNameError} = this.state
    const errorHighlight = firstNameError ? 'error-field' : ''

    return (
      <>
        <label htmlFor="firstName" className="input-label">
          FIRST NAME
        </label>
        <input
          type="text"
          className={`first-name-input-field ${errorHighlight}`}
          id="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </>
    )
  }

  renderSubmitReport = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  renderRegistrationForm = () => {
    const {firstNameError, lastNameError} = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="input-container">{this.renderFirstNameField()}</div>
        {firstNameError && <p className="error-message">Required</p>}
        <div className="input-container">{this.renderLastNameField()}</div>
        {lastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isSubmitClicked} = this.state
    return (
      <div className="registration-form-container">
        <h1 className="heading">Registration Form</h1>
        <div className="container">
          {isSubmitClicked
            ? this.renderSubmitReport()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
