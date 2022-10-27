import AddHeroForm from './AddHeroForm'
import Modal from '../../components/Modal/Modal'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const modalRef = useRef<any>(null)

  return (
    <>
      <header>
        <div className='header__content content-width'>
          <Link to='/'>
            <div className='header__content__logo'>
              <img
                src='https://pngimg.com/uploads/fist/fist_PNG15.png'
                alt='logo'
              />
              <h1>Superheroes</h1>
            </div>
          </Link>
          <div className='header__content__actions'>
            <button
              onClick={() => {
                modalRef.current?.open()
              }}
            >
              Add new hero
            </button>
          </div>
        </div>
      </header>
      <Modal ref={modalRef}>
        <AddHeroForm />
      </Modal>
    </>
  )
}

export default Header
