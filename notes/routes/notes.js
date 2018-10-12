const util = require('util');
const express = require('express');
const router = express.Router();
const notes = require('../models/notes-memory');

router.get('/add', (req, res, next) => {
res.render('noteedit', {
    title: "Add note",
    docreate: true,
    notekey: "",
    note: undefined
})
})

router.post('/save', async(req, res, next) => {
    var note;
    if(req.body.docreate === 'create'){
        note = await notes.create(req.body.notekey, req.body.title, req.body.body);
    }
    else {
        note = await notes.update(req.body.notekey, req.body.title, req.body.body);
    }

    res.redirect('/notes/view?key=' + req.body.notekey);
})
module.exports = router;
