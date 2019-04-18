import React, {Component} from 'react';
import {fetchArtist} from "../../store/actions/artistsActions";
import {connect} from "react-redux";
import {fetchAlbums} from "../../store/actions/albumsActions";
import Card from "../../components/Card/Card";

class Albums extends Component {

    async componentDidMount() {
        await this.props.fetchArtist(this.props.match.params.id);
        this.props.fetchAlbums(this.props.match.params.id);
    }

    render() {
        return (
            <div className="container py-3">
                <h1 className="mb-3">{this.props.artist.name}'s albums</h1>
                <div className="row">
                    {this.props.albums.map(album => (
                        <Card
                            key={album._id}
                            title={album.title}
                            image={album.image}
                            routePath={`/albums/${album._id}`}
                            year={album.year}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    error: state.albums.error,
    loading: state.albums.loading,
    artist: state.artists.artist,
    albums: state.albums.albums
});

const mapDispatchToProps = dispatch => ({
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchAlbums: artistId => dispatch(fetchAlbums(artistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
