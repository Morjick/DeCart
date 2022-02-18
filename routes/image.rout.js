const { Router } = require('express')
const router = Router()
const { jsPDF } = require('jspdf')

let FileName

router.post('/', async (req, res, e) => {
  try {

    let pngString = req.body
    let pngData = req.body.data
    var img = Buffer.from(pngData, 'base64')

    await console.log('pngData:', pngData)

    let now = Date.now()
    let filename = now + '.pdf'

    let thisItem = `${now}.png`

    let pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [820, 600],
      compress: true
    })

    await pdf.addImage(img, 'png', 1, 1, 820, 600, null, 'SLOW')

    pdf.save(`routes/pdfs/${now}.pdf`)
    console.log('i am create', filename)



    FileName = filename

    res.status(200).json({ message: 'Всё прошло хорошо, данные получены', rout: FileName })

  } catch (e) {
    console.log(e)
    res.status(501).json({ message: 'Ошибка на сервере при post запросе, imgae.router не дал ответа', body: pngString })
  }
})

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