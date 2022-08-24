// Write your code here
import './index.css'

const EventItem = props => {
  const {details, findEvent} = props
  const {id, imageUrl, name, location} = details
  const click = () => {
    findEvent(id)
  }

  return (
    <li className="event-item">
      <button type="button" onClick={click} className="event-btn">
        <img src={imageUrl} alt="event" className="event-image" />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}
export default EventItem
