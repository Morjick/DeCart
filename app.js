const express = require('express')
const path = require('path')

const app = express()

app.use(express.json({ extended: true, limit: '50mb'}))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  console.log('work')
})

app.use('/api/poster', require('./routes/poster.rout'))
app.use('/api/image', require('./routes/image.rout'))
app.use('/generate', require('./routes/generate.rout'))
app.use('/download', require('./routes/image.rout'))


const PORT = process.env.PORT || 80

app.listen( PORT, () => {
  console.log('Server has been started on port ' + PORT)
})