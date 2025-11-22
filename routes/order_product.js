const router = require(`express`).Router()
const ordercontroller = require('../controllers/order_productcontroller')
router.get('/',ordercontroller.getAllOrderProduct)
router.post('/',ordercontroller.createOrders_product)
router.put('/:id',ordercontroller.updateOrder_product)
router.delete('/:id',ordercontroller.deleteOrder_product)

module.exports = router