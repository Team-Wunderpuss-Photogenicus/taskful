const express = require('express');
const familyController = require('../controllers/familyController');

const router = express.Router();

router.get('/:id', familyController.getChore, (req, res) => {
    res.status(200).json(res.locals.chore)
});

router.post('/:id', familyController.addChore, (req, res) => {
    res.status(200).json(res.locals.chore)
});

router.delete('/:id', familyController.deleteChore, (req, res) => {
    res.status(200).json([{"success": "success"}])
});

module.exports = router;