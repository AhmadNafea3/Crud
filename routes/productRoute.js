const router = require('express').Router()

const productcontroller = require('../controllers/productcontroller')

router.get('/',productcontroller.getAllProducts)
router.get(`/:id`,productcontroller.getproductById)
router.get('/products/category/:categoryId',productcontroller.getproductsByCategoryId)
router.post('/products', productcontroller.createProduct)
router.put('/:id',productcontroller.updateProduct)
router.delete('/:id',productcontroller.deleteProduct)
module.exports = router