import ListItem from '../../components/ListItem/ListItem'
import './Main.css'

const Main = () => {
  return (
    <main>
      <div className='main__content content-width'>
        <div className='main__content__banner'>
          <div className='main__content__banner__muted'>
            <h3>List of all superhero characters</h3>
          </div>
        </div>
        <div className='main__content__list'>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
    </main>
  )
}

export default Main
