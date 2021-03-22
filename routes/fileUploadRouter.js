import express from 'express'
import fileUpload from '../controllers/fileUploadController.js'
import multer from 'multer'
import path from 'path'

//init router
const router = express.Router();

//init storage for image
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null, file.fieldname + Date.now() + path.extname(file.originalname))
  }
})

//init multer
const upload = multer({ storage: storage})

router.route('/').post(upload.single('image'), fileUpload);

export default router;
