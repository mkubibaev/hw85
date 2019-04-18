import React, {Component} from 'react';
import {fetchArtists} from "../../store/actions/artistsActions";
import {connect} from "react-redux";
import Card from "../../components/Card/Card";

class Artists extends Component {

    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {
        return (
            <div className="container py-3">
                <h1 className="mb-3">Artists</h1>
                <div className="row">
                    {this.props.artists.map(artist => (
                        <Card
                            key={artist._id}
                            title={artist.name}
                            image={artist.image}
                            routePath={`/artists/${artist._id}`}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.artists.error,
    loading: state.artists.loading,
    artists: state.artists.artists
});

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
