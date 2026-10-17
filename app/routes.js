//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/create-routes/
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/', function (req, res) {
  var answer = req.session.data['selectAnswer']
  if (answer === 'sd') {
      return res.redirect('/service-design')
  }
  if (answer === 'pm') {
      return res.redirect('/product-manager')
  }
  if (answer === 'both') {
      return res.redirect('/both')
  }
  res.redirect('/unsure')
})