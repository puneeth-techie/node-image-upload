import mongoose  from 'mongoose'

const fileSchema = new mongoose.Schema({
  userImage: {
    type: String,
    required: true
  }
}, {timestamps: true});

const ImageFile = mongoose.model('ImageFile', fileSchema)

export default ImageFile;
