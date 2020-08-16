module.exports = (express) => {
  const api = express.Router()

  require('./candidates')(api)

  return api
}
