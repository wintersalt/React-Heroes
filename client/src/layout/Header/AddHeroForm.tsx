import axios from 'axios'
import { ChangeEvent, FormEvent, useState } from 'react'
import './AddHeroForm.css'

interface IHero {
  nickname: string
  real_name: string
  origin_description: string
  superpowers: string
  catch_phrase: string
  images: Array<File>
}

const AddHeroForm = () => {
  const [hero, setHero] = useState<IHero>({
    nickname: '',
    real_name: '',
    origin_description: '',
    superpowers: '',
    catch_phrase: '',
    images: [],
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHero((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData: any = new FormData()

    formData.append('nickname', hero.nickname)
    formData.append('real_name', hero.real_name)
    formData.append('origin_description', hero.origin_description)
    formData.append('superpowers', hero.superpowers)
    formData.append('catch_phrase', hero.catch_phrase)
    formData.append('images', hero.images[0])

    await axios
      .post('http://localhost:3001/api/heroes/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      })
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Character</h1>
      <input
        type='text'
        name='nickname'
        placeholder='Nickname'
        onChange={handleChange}
        required
      />
      <input type='text' name='real_name' placeholder='Real Name' required />
      <input
        type='text'
        name='origin_description'
        placeholder='Origin Description'
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='superpowers'
        placeholder='Superpowers'
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='catch_phrase'
        placeholder='Catch Phrase'
        onChange={handleChange}
        required
      />
      <input
        type='file'
        name='images'
        onChange={(e) =>
          setHero((prev) => ({ ...prev, [e.target.name]: e.target.files }))
        }
        style={{ color: '#fff' }}
        accept='image/png, image/jpg, image/jpeg'
        multiple
      />
      <div className='form__btn__container'>
        <input type='submit' value='Add New Hero' />
      </div>
    </form>
  )
}

export default AddHeroForm
