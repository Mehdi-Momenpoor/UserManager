import React, { useState } from 'react';
import SearchPanel from './SearchPanel';
import { getUsers } from './server';
import { Button, Header } from './UserDetail'
import UserList from './UserList';



export default function UserManager() {

    const [users, setUsers] = useState([]);

    async function handleSearch(keyword) {
        const users = await getUsers(keyword);
        setUsers(users)
    }

    return (
        <div>
            <Header>Users!</Header>
            <SearchPanel
                onSearch={handleSearch}
            />
            <UserList
                users={users}
            />
            <Button>Add</Button>
        </div>
    )
}
