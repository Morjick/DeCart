const { Router} = require('express')
const router = Router()

const axios = require('axios')

router.get('/', (req, res) => {
  try{

    console.log('word')

  } catch(e) {
    console.log(e)
    res.status(501).json({ message: 'Ошибка на сервере при post запросе' })
  }
})

module.exports = router