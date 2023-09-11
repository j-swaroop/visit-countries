import './index.css'

const CountriesList = props => {
  const {details, onAddCountry} = props

  const onClickAddCountry = () => {
    onAddCountry(details.id)
  }

  const isActive = details.isVisited ? (
    <p className="visited">Visited</p>
  ) : (
    <button type="button" onClick={onClickAddCountry} className="button">
      {' '}
      Visit
    </button>
  )

  return (
    <li className="country-item">
      <p className="country-name"> {details.name} </p>
      {isActive}
    </li>
  )
}

export default CountriesList
