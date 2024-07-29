// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetsDetails} = props
  const {name, imageUrl, description} = planetsDetails
  console.log(name)
  return (
    <div className="planets-item-container">
      <img src={imageUrl} className="planets-img" alt={`planet ${name}`} />
      <h1 className="planets-name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
