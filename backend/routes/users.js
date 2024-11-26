const express = require('express');
const { addUser, getAllUsers } = require('../db/queries');
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new user
router.post('/', async (req, res) => {
    const { username, email } = req.body;
    try {
        const result = await addUser(username, email);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
