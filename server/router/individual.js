const express = require('express');
const individualController = require('../controllers/individualController');

const router = express.Router();

router.get('/', individualController.getChores, (req, res) => {
    // console.log('histories', res.locals.histories)
    res.status(200).send(res.locals.chores)
});

router.patch('/:id', individualController.addChore, (req, res) => {
    res.status(200).json(res.locals.chore)
});

router.delete('/:id', individualController.deleteChore, (req, res) => {
    res.status(200).json(res.locals.chore)
});

module.exports = router;