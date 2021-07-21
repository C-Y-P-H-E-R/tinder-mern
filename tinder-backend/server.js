import express from 'express'
import mongoose from 'mongoose'
import cards from './dbCards.js'
import Cors from 'cors'

// App config
const app = express()
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:k1ZOgEQQ1PiM791L@cluster0.okqaw.mongodb.net/tinderDb?retryWrites=true&w=majority'

// middlewares
app.use(express.json());
app.use(Cors());

// db config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API endpoints
app.get('/',(req,res) => res.status(200).send('Hello World!'))
app.post('/tinder/cards',(req,res)=>{ 
    const dbCard = req.body;
    cards.create(dbCard,(err,data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})
app.get('/tinder/cards',(req,res)=> {
    cards.find((err,data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//listener
app.listen(port, () => console.log(`listening in localhost: ${port}`));
