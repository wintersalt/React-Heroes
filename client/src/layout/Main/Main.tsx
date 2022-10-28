import ListItem from '../../components/ListItem/ListItem'
import { useState, useEffect } from 'react'
import './Main.css'

const API_URl = process.env.REACT_APP_API_URL

const Main = () => {
  const [imageList, setImageList] = useState<[]>([])

  const getImages = async () => {
    const response = await fetch(`${API_URl}/photos`)
    const responseJson = await response.json()

    return responseJson
  }

  useEffect(() => {
    const fetchData = async () => {
      const responseJson = await getImages()
      setImageList(responseJson.resources)
    }

    fetchData()
  }, [])

  return (
    <main>
      <div className='main__content content-width'>
        <div className='main__content__banner'>
          <div className='main__content__banner__muted'>
            <h3>List of all superhero characters</h3>
          </div>
        </div>
        <div className='main__content__list'>
          {/* <ListItem nickname='Something' image='' /> */}
          {imageList.map((image: any) => (
            <img src={image.url} alt={image.public_id} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Main
