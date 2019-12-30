const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))
router.get('/works', controllers.getAllWorks)
router.post('/works', controllers.addWorks)
router.put('works', controllers.updateWorks)
router.delete('works/:id', controllers.deleteWorks)

module.exports = router;