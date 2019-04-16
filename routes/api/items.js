const express = require('express');
const router = express.Router();

// Item Model (so we can query the db)
const Item = require('../../models/Item');



// @route   GET request to 'api/items'
// @desc    Retrieves all items
// @access  Public 
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


// @route   POST request to 'api/items'
// @desc    Creates an item
// @access  Public 
router.post('/', (req, res) => {
    // 'new' refers to us creating a new instance of the 'Item' model we made in Item.js
    // 'Item' refers to the 'Item' model (template) we created in Item.js
    const newItem = new Item({
        name: req.body.name
    }); 

     
    newItem
        .save() // saves the new item to our database
        .then(item => {
            res.json(item);
        })
        .catch(err => {
            res.json(err);
        });
});


module.exports = router;