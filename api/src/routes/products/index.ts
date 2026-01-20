import {Router} from 'express'
import { getProductsById } from './productController';

const router = Router();



router.get('/', getProductsById)

router.post('/', (req, res) => {
  res.send('New products created!')
})



export default router;
