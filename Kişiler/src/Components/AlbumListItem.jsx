import React from 'react';
import PropTypes from 'prop-types';

function AlbumListItem({ album }) {
    return <div>{album.title}</div>;
}

AlbumListItem.propTypes = {
    album: PropTypes.object.isRequired
};

export default AlbumListItem;
