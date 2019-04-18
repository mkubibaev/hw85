const express = require('express');

const Track = require('../models/Track');
const Album = require('../models/Album');

const router = express.Router();

router.get('/', (req, res) => {
    if (req.query.album) {
        Track.find({album: req.query.album})
            .then(result => res.send(result))
            .catch(() => res.sendStatus(500));

    } else if (req.query.artist) {
        Album.find({artist: req.query.artist})
            .then(async albums => {
                    let tracksByArtist = [];

                    for(let album of albums) {
                        await Track.find({album})
                            .then(track => tracksByArtist = [...tracksByArtist, ...track]) //concat не хочет
                    }

                    res.send(tracksByArtist);
                }
            )
            .catch(() => res.sendStatus(500));

    } else {
        Track.find()
            .then(result => res.send(result))
            .catch(() => res.sendStatus(500));
    }
});

router.post('/', (req, res) => {
    const track = new Track(req.body);

    track.save()
        .then(result => res.send(result))
        .catch(error => res.status(400).send(error));

});



module.exports = router;
