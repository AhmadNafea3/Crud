const router = require(`express`).Router()
const ordercontroller = require('../controllers/ordercontroller')
router.get('/orders',ordercontroller.getAllOrder)
router.post('/orders',ordercontroller.createOrders)
router.put('/orders/:id',ordercontroller.updateOrder)
router.delete('/:id',ordercontroller.deleteOrder)

module.exports = router