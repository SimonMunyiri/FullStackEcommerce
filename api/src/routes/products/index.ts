import {Router} from 'express'

const router = Router();



router.get('/', (req, res) => {
  res.send('List of products!')
})

router.post('/', (req, res) => {
  res.send('New products created!')
})



export default router;
