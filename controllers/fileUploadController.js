const fileUpload = async (req, res, next) => {
      res.send(req.file)
}

export default fileUpload;
