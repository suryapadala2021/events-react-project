// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status} = props
  const initialStatusDisplay = () => (
    <h1 className="initial">
      Click on the event,to view this registration details
    </h1>
  )
  const yetToRegister = () => (
    <div className="yet_to_register">
      <img
        className="yet_to_register_img"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt=" yet to register"
      />
      <p className="yet_to_register-heading">
        A live perfomance brings so much to your relationship with dance.Seeing
        dance live can often make you fall tottaly in love with beautiful art
        form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )
  const closedRegistration = () => (
    <div className="yet_to_register">
      <img
        className="yet_to_register_img"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <p className="closed-registrations-heading">
        Registrations are closed Now!
      </p>
      <p className="closed-ragistration-description">Stay tuned .We will repoen the registrations soon.</p>
    </div>
  )

  switch (status) {
    case 'INITIAL':
      return initialStatusDisplay()
    case 'YET_TO_REGISTER':
      return yetToRegister()
    case 'REGISTRATIONS_CLOSED':
      return closedRegistration()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
