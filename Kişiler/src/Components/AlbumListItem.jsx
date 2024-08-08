import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes library
import ExpandablePanel from './ExpandablePanel';
import PhotoList from './PhotoList';
import { GoTrashcan } from 'react-icons/go';
import { useRemoveAlbumMutation, useRemoveUserMutation } from '../store';
import CircularProgress from '@mui/material/CircularProgress';

function AlbumListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation();


    const handleClick = () => {

        removeAlbum(album);
    };

    const header = (
        <>
            <button
                style={{ marginRight: '30px', border: 'none', cursor: 'pointer' }}
                onClick={handleClick}
            >
                {results.isLoading ? (
                    <CircularProgress style={{ width: '20px', height: '20px' }} />
                ) : (
                    <GoTrashcan />
                )}
            </button>
            {album.title}
        </>
    );

    return (
        <div>
            <ExpandablePanel header={header}>
                <PhotoList album={album} />
            </ExpandablePanel>
        </div>
    );
}

AlbumListItem.propTypes = {
    album: PropTypes.object.isRequired, // Add prop type validation for 'album'
};

export default AlbumListItem;
