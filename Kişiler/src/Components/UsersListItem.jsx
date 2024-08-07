import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import AlbumList from './AlbumList';
import ExpandablePanel from './ExpandablePanel';
import { GoTrashcan } from 'react-icons/go';
import { useRemoveUserMutation } from '../store';
import CircularProgress from '@mui/material/CircularProgress';

function UsersListItem({ user }) {
    const [removeUser, results] = useRemoveUserMutation();


    const handleClick = () => {

        removeUser(user);
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
            {user.name}
        </>
    );
    return (
        <div>
            <ExpandablePanel header={header}>
                <AlbumList user={user} />
            </ExpandablePanel>
        </div>
    );
}

UsersListItem.propTypes = {
    user: PropTypes.object.isRequired, // Add prop type validation for 'user'
};

export default UsersListItem;
