var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: true, MSG: 'Hello Folks You have passed this Test' });
});

module.exports = router;
