const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  let data = req.body

  console.log('data:', data)
})

module.exports = router