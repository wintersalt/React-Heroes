const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_KEY_SECRET,
  secure: true,
})

const uploadImage = async (image) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: false,
  }

  try {
    const result = await cloudinary.uploader.upload(image, options)

    console.log(result)

    return result
  } catch (error) {
    console.log('fart')
    console.error(error)
  }
}

module.exports = { uploadImage }
