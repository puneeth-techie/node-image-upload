import express from 'express'
import fileUpload from '../controllers/fileUploadController.js'
import upload from '../utils/multer.js'


//init router
const router = express.Router();

router.route('/').post(upload.single('image'), fileUpload);

export default router;
