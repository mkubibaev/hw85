const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');
const path = require('path');

const config = require('../config');
const Album = require('../models/Album');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', (req, res) => {
    if (req.query.artist) {
        Album.find({artist: req.query.artist}).sort('year')
            .then(result => res.send(result))
            .catch(() => res.sendStatus(500));
    } else {
        Album.find()
            .then(result => res.send(result))
            .catch(() => res.sendStatus(500));
    }
});

router.get('/:id', (req, res) => {
    Album.findById(req.params.id)
        .then(result => {
            if(result) {
                res.send(result)
            } else {
                res.sendStatus(404);
            }
        })
        .catch(() => res.sendStatus(500));
});

router.post('/', upload.single('image'),(req, res) => {
    const albumData = req.body;

    if (req.file) {
        albumData.image = req.file.filename;
    }

    const album = new Album(albumData);

    album.save()
        .then(result => res.send(result))
        .catch(error => res.status(400).send(error));
});

module.exports = router;
