import Modal from '../../components/Modal/Modal'
import { useRef } from 'react'
import './Header.css'

const Header = () => {
  const modalRef = useRef<any>(null)

  return (
    <>
      <header>
        <div className='header__content content-width'>
          <div className='header__content__logo'>
            <img
              src='https://pngimg.com/uploads/fist/fist_PNG15.png'
              alt='logo'
            />
            <h1>Superheroes</h1>
          </div>
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
        <h1>Hello, World!</h1>
      </Modal>
    </>
  )
}

export default Header
