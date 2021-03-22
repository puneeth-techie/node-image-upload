import createError from 'http-errors'

const notFound = async (req, res, next) => {
  next(createError(404, 'URL not found.'))
}

export default notFound;
