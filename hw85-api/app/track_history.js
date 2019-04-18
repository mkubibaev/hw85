const express = require('express');

const TrackHistory = require('../models/TrackHistory');
const User = require('../models/User');
const Track = require('../models/Track');

const router = express.Router();

router.post('/', async (req, res) => {

    const token = req.get('Authorization');
    if (!token) {
        return res.sendStatus(401);
    }

    const user = await User.findOne({token});
    if (!user) {
        return res.sendStatus(401);
    }

    try {
        await Track.findById(req.body.track);
    } catch (e) {
        res.sendStatus(400);
    }


    const trackHistory = new TrackHistory({
        user: user._id,
        track: req.body.track
    });

    trackHistory.generateDateTime();

    try {
        await trackHistory.save();
        return res.send(trackHistory);
    } catch (error) {
        return res.status(500).send(error);
    }

});


module.exports = router;
