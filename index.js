const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3001

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


let cards =
    [{
        id: "1",
        name: "first card",
        priority: 1,
        status: "To do"
    },
        {
            id: "2",
            name: "second card",
            priority: 2,
            status: "In progress"
        },
        {
            id: "3",
            name: "Third card",
            priority: 3,
            status: "Review"
        }
    ]

app.get('/', (req, res) => {res.send('Hello World')})

app.get('/cards', (req, res) => {res.send(cards)})

app.delete('/cards/:cardId', (req,res) => {
const cardId = req.params.cardId
    cards = cards.filter(el => el.id !== cardId)
    res.send(cards)})

app.post('/cards', (req, res) => {
    const card = req.body
    cards.push({
        id: Math.random().toString(), ...card
    })
    res.send("Card has been created")
})
app.patch('/cards/:cardId', (req, res) => {
    const cardId = req.params.cardId
    const card = req.body
    cards = card.map(el => el.id === cardId ? ({ ...card, id: el.id}) :  el)
    res.send("")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

