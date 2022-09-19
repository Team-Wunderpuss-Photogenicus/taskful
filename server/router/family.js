const express = require('express');
const familyController = require('../controllers/familyController');

const router = express.Router();

router.get('/:id', familyController.getChores, (req, res) => {
    res.status(200).json(res.locals.histories)
});

router.post('/:id', familyController.addChore, (req, res) => {
    res.status(200).json([{"success": "success"}])
});

router.delete('/:id', familyController.deleteChore, (req, res) => {
    res.status(200).json([{"success": "success"}])
});



module.exports = router;