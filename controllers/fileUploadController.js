import ImageFile from '../models/fileUploadModel.js'
import createError from 'http-errors'

const fileUpload = async (req, res, next) => {
      if(req.file.mimetype === 'image/png' || req.file.mimetype === 'image/jpg'){
        let image = new ImageFile({
          userImage: req.file.path
        })
        image = await image.save();
        res.status(200);
        res.send(image);
      }else{
          createError(400, 'Please upload png or jpg format only.')
      }
}

const getImages = async (req, res, next) => {
    try{
      const result = await ImageFile.find().select('userImage')
      res.status(200)
      //const view = result.userImage.split('\\')[2]
      const response = {
        viewImages: result.map(res => {
          return {
            ImageLink: `http://localhost:5000/${res.userImage.split('\\')[2]}`
          }
        })
      }
      res.send(response);
    }catch(error){
      createError(error)
    }
}

export { fileUpload, getImages };
