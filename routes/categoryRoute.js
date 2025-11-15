const router = require(`express`).Router()

const categorycontroller = require('../controllers/categorycontroller')

router.get('/categories',categorycontroller.getAllCategorys)
router.post('/categories',categorycontroller.createCategory)
router.put('/categories/:id',categorycontroller.ubdatecategory)
router.delete('/categories/:id', categorycontroller.deleteCategory)
module.exports = router 