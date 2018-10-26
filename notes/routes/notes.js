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
router.get('/view', async (req, res, next) => {
    var note =await notes.read(req.query.key);
    res.render('noteview', {
        title: note ? note.title : "",
        notekey: req.query.key,
        note: note
    });
});

router.get('/edit', async (req, res, next) => {
    var note = await notes.read(req.query.key);
    res.render('noteedit', {
        title: note ? ("Edit" + note.title) : "Add a note",
        docreate: false,
        notekey: req.query.key,
        note: note
    });
});

router.get('/destroy', async (req, res, next) => {
    var note = await notes.read(req.query.key);
    res.render('notedestroy', {
        title: note ? note.title: "",
        notekey: req.query.key,
        note: note
    });
});

router.post('/destroy/confirm', async (req, res, next) => {
    await notes.delete(req.body.notekey);
    res.redirect('/');
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
