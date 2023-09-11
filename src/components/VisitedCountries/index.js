import './index.css'

const VisitedCountries = props => {
  const {details, removeCountry} = props

  const onClickRemoveCountry = () => {
    removeCountry(details.id)
  }

  return (
    <li className="visited-country-item">
      <img className="visited-img" src={details.imageUrl} alt="thumbnail" />
      <div className="text-container">
        <p className="text"> {details.name} </p>
        <button
          type="button"
          onClick={onClickRemoveCountry}
          className="remove-btn"
        >
          {' '}
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
