const express = require('express');

const auth = require('../middleware/auth');

const TrackHistory = require('../models/TrackHistory');
const User = require('../models/User');
const Track = require('../models/Track');

const router = express.Router();

router.get('/', auth, async (req, res) => {
    if (req.user) {
        try {
            const trackHistory = await TrackHistory.find({user: req.user._id})
                .sort('datetime')
                .populate({
                    path: 'track',
                    populate: {path: 'title', model: 'Album',
                        populate: {
                            path: 'name',
                            model: 'Artist'
                        }
                    },
                });

            return res.send(trackHistory);
        } catch (error) {
            return res.sendStatus(500);    
        }
    } else {
        return res.status(401).redirect("/login");
    }
});

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
