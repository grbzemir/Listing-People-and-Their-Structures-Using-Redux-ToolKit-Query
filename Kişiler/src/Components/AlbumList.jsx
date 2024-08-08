import React from 'react';
// Remove the duplicate import statement
import { useAddAlbumMutation, useFetchAlbumsQuery } from '../Store';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import AlbumListItem from './AlbumListItem';
import PropTypes from 'prop-types';


function AlbumList({ user }) {
    const { data, isError, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAlbumAdd = () => {
        addAlbum(user);
    };

    let content;
    if (isFetching) {
        content = (
            <Skeleton variant="rectangular" sx={{ width: '100%', height: '200px' }} />
        );
    } else if (isError) {
        content = <div>Hata Var</div>;
    } else {
        content = data.map((album) => {
            return <AlbumListItem key={album.id} album={album} />;
        });
    }

    return (
        <>
            <div>
                <div className="topArrangement">
                    <h3>{user.name} Albümü</h3>
                    <Button variant="outlined" onClick={handleAlbumAdd}>
                        {results.isLoading ? (
                            <CircularProgress />
                        ) : (
                            <span> Albüm Ekle+</span>
                        )}
                    </Button>
                </div>
            </div>
            <div>{content}</div>
        </>
    );
}

AlbumList.propTypes = {
    user: PropTypes.object.isRequired,
};

export default AlbumList;
