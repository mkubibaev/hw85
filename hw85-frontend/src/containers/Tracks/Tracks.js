import React, {Component} from 'react';
import {fetchTracks} from "../../store/actions/tracksActions";
import {connect} from "react-redux";

class Tracks extends Component {
    componentDidMount() {
        this.props.fetchTracks(this.props.match.params.id);
    }

    render() {
        return (
            <div className="container py-3">
                <h1 className="mb-3">Tracks</h1>

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
    tracks: state.tracks.tracks
});

const mapDispatchToProps = dispatch => ({
    fetchTracks: albumId => dispatch(fetchTracks(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
