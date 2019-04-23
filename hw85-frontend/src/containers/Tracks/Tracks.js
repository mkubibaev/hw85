import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchTracks} from "../../store/actions/tracksActions";
import {fetchAlbum} from "../../store/actions/albumsActions";
import {fetchArtist} from "../../store/actions/artistsActions";

class Tracks extends Component {
    async componentDidMount() {
        await this.props.fetchAlbum(this.props.match.params.id);

        if (this.props.album && this.props.album.artist) {
            await this.props.fetchArtist(this.props.album.artist);
        }

        this.props.fetchTracks(this.props.match.params.id);
    }

    render() {
        return (
            <div className="container">
                <h1 className="mb-3">{this.props.artist.name} - {this.props.album.title}</h1>

                <ul className="list-group">
                    {this.props.tracks.map(track => (
                        <li key={track._id} className="list-group-item d-flex justify-content-between align-items-center">
                            {track.number}. {track.title}
                            <span className="badge badge-primary badge-pill">{track.duration}</span>
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.tracks.error,
    loading: state.tracks.loading,
    album: state.albums.album,
    artist: state.artists.artist,
    tracks: state.tracks.tracks,
});

const mapDispatchToProps = dispatch => ({
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    fetchTracks: albumId => dispatch(fetchTracks(albumId)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
