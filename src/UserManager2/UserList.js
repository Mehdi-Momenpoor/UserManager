import React from 'react'
import List from './List'
import UserListItem from './UserListItem'

export default function UserList({ users, onDelete }) {
    return (
        <List>
            {users.map(user => (
                <UserListItem
                    key={user.id}
                    name={user.name}
                    onDelete={() => onDelete(user.id)}
                />
            ))}
        </List>
    )
}
