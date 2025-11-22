const router = require(`express`).Router()

const categorycontroller = require('../controllers/categorycontroller')

router.get('/',categorycontroller.getAllCategorys)
router.post('/',categorycontroller.createCategory)
router.put('/:id',categorycontroller.ubdatecategory)
router.delete('//:id', categorycontroller.deleteCategory)
module.exports = router 