const express = require('express');
const individualController = require('../controllers/individualController');

const router = express.Router();

router.get('/:id', individualController.getChores, (req, res) => {
    // console.log('histories', res.locals.histories)
    res.status(200).json(res.locals.histories)
});

router.post('/:id', individualController.addChore, (req, res) => {
    res.status(200).json([{"success": "success"}])
});

router.delete('/:id', individualController.deleteChore, (req, res) => {
    res.status(200).json([{"success": "success"}])
});



module.exports = router;