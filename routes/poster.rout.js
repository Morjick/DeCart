const { Router } = require('express')
const router = Router()

let fs = require('fs')

let Path = require('path')

let FileName

// api/poster
router.post('/', async (req, res, e) => {
  try {
    let posterData = req.body

    let center = posterData.center
    let styler = posterData.style
    let width = posterData.containerWidth
    let height = posterData.containerHeight
    let zoom = posterData.zoom

    if (styler == null || styler == undefined) {
      styler = 'dark-v10'
    }
    if (center == null || center == undefined) {
      center = {
        lat: '54.70649',
        lng: '20.51095'
      }

    }
    if (zoom === null || zoom == undefined) {
      zoom = '9'
    }

    let PosterInfo = {
      center: center,
      styler: styler,
      width: width,
      height: height,
      zoom: zoom
    }

    return res.status(200).json({ message: 'Что-то произошло, post работает', body: PosterInfo })

  } catch (e) {
    console.log(e)
    res.status(501).json({ message: 'Ошибка на сервере при post запросе' })
  }
})

// /download/:FileName
router.get('/:FileName', (req, res) => {
  try {
    thisFile = `${__dirname}/pdfs/${FileName}`

    console.log('get-запрос выдал:', thisFile)

    return res.status(200).sendFile(thisFile)
  } catch (e) {
    console.log('errors:', e)
    res.status(501).json({ message: 'Ошибка на сервере при get запросе' })
  }
})


module.exports = router