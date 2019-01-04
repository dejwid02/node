const note = require('./Note');

var notes = [];

exports.update = exports.create = async function (key, title, body) {
    notes[key] = new note(key, title, body);
    return notes[key];
};

exports.read = async function(key) {
    if (notes[key]) return notes[key];
    else throw new Error (`NOte ${key} does not exist`);
};

exports.destroy = async function(key) {
    if (notes[key]) {
        delete notes[key];
    } else throw new Error (`NOte ${key} does not exist`);
};

exports.keylist = async function() {return Object.keys(notes); };

exports.count = async function() {return notes.length;};

exports.close = async function(){}