import React from 'react';
import PropTypes from 'prop-types';

function AlbumList({ user }) {
    return <div>{user.name} Albümü</div>;
}

AlbumList.propTypes = {
    user: PropTypes.object.isRequired
};

export default AlbumList;
