const express = require('express');
const router = express.Router();

// Item Model (so we can query the db)
const Item = require('../../models/Item');



// @route   GET request to 'api/items'
// @desc    Retrieves all items
// @access  Public 

// GET Request Handler for all requests to 'api/items' endpoint
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 }) // sorts all retrieved items by date; "-1" = descending order, "1" = ascending order 
        .then(items => {
            res.json(items)
        })
        .catch(err => {
            res.json(err);
        });
});


module.exports = router;