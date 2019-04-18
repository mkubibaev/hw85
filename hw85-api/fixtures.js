const mongoose = require('mongoose');
const config = require('./config');

const Artist = require('./models/Artist');
const Album = require('./models/Album');
const Track = require('./models/Track');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;
    const collections = await connection.db.collections();

    for (collection of collections) {
        await collection.drop();
    }

    const artists = await Artist.create(
        {name: 'Eminem', image: 'artist_eminem.png'},
        {name: 'Rihanna', image: 'artist_rihanna.png'},
        {name: 'Katy Perry', image: 'artist_katy_perry.png'},
    );

    const albums = await Album.create(
        {title: 'Encore', artist: artists[0]._id, year: 2004, image: 'album_encore.png'},
        {title: 'Recovery', artist: artists[0]._id, year: 2010, image: 'album_recovery.png'},
        {title: 'Diamonds', artist: artists[1]._id, year: 2014, image: 'album_diamonds.png'},
        {title: 'Loud', artist: artists[1]._id, year: 2008, image: 'album_loud.png'},
        {title: 'Prism', artist: artists[2]._id, year: 2016, image: 'album_prism.png'}
    );

    await Track.create(
        {title: 'Never enough', album: albums[0]._id, duration: '2:39', number: 2},
        {title: 'Rain man', album: albums[0]._id, duration: '5:10', number: 1},
        {title: 'On fire', album: albums[0]._id, duration: '3:07', number: 3},
        {title: 'Umbrella', album: albums[1]._id, duration: '4:37', number: 5},
        {title: 'Birthday', album: albums[2]._id, duration: '3:21', number: 4},
        
    )

    await connection.close();
}

run().catch(error => {
    console.error('Something went wrong');
});