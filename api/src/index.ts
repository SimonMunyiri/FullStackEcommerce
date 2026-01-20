import express, {json, urlencoded} from 'express'
import productRouter from './routes/products/index'

const port = 3000

const app = express()

app.use(json())

app.use(urlencoded({extended: false}))



app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.use('/products', productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
