const express = require('express');
const Posts = require('../models/posts');
const Contacts = require('../models/contactUs');

const router = express.Router();

//Save posts

router.post('/post/save', (req, res) => {
    let newPost = new Posts(req.body);

    newPost.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Posts saved sucessfully"
        });
    });
});

//Save Contact

router.post('/contact/save', (req, res) => {
    let newContact = new Contacts(req.body);

    newContact.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Contact saved sucessfully"
        });
    });
});

//Get data

router.get('/posts', (req, res) => {
    Posts.find().exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: posts
        });
    });
});

//Get Contact

router.get('/contacts', (req, res) => {
    Contacts.find().exec((err, contacts) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingContacts: contacts
        });
    });
});

module.exports = router;