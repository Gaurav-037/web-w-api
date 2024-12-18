const express = require('express')
const messageRouter = require('./routers/messageRouter')
const whatsappClient = require('../src/services/WhatsappClient')

whatsappClient.initialize()

const app = express()


app.use(express.json())
app.use(messageRouter)
// app.use(whatsappClient)

app.listen(10000, () => console.log("Server is ready"))