const express = require('express')
const { engine } = require('express-handlebars')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyParser.json)

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get("/", (req, res) => {
  res.render('index')
})

app.get("/sobre/:id", (req, res) => {
  res.render("sobre", { id })
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})