import './ListItem.css'

interface IListItem {
  image: string
  nickname: string
}

const ListItem = ({ image, nickname }: IListItem) => {
  return (
    <div className='listItem'>
      <img src='https://i.annihil.us/u/prod/marvel/i/mg/e/03/6352e578950f0/portrait_uncanny.jpg' />
      <h4>{nickname}</h4>
    </div>
  )
}

export default ListItem
