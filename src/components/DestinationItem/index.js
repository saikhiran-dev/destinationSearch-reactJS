import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="image" />
      <p className="image-name">{name}</p>
    </li>
  )
}
export default DestinationItem
