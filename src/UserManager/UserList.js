import React from 'react'
import UserListItem from './UserListItem'

export default function UserList({ users }) {
    return (
        <ul>
            {users.map(user => (
                <UserListItem
                    key={user.id}
                    userName={user.name}
                />))
            }
        </ul>
    )
}
