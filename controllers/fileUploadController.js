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

export default fileUpload;
