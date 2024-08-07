import React from 'react'
import PropTypes from 'prop-types'

function UsersListItem({ user }) {
    return (
        <div>
            {user.name}
        </div>
    )
}

UsersListItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UsersListItem
