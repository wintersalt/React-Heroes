import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='header__content content-width'>
        <div className='header__content__logo'>
          <h1>Superheroes</h1>
        </div>
        <div className='header__content__actions'>
          <button>Add new hero</button>
        </div>
      </div>
    </header>
  )
}

export default Header
