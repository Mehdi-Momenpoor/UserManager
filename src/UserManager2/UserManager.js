import React, { useState } from 'react';
import SearchPanel from './SearchPanel';
import { deleteUser, getUsers } from './server';
import { Button, Header } from './UserDetail';
import UserList from './UserList';


export default function UserManager() {

    const [users, setUsers] = useState([]);
    const [value, setValue] = useState('');

    function handleKeywordChange(e) {
        setValue(e.target.value)
    }

    async function handleSearch() {
        const users = await getUsers(value);
        setUsers(users);
        console.log('Search');
    }

    async function handleDelete(id) {
        console.log(id);
        await deleteUser(id);
        handleSearch();
    }
 
    return (
        <>
            <Header>Users</Header>
            <SearchPanel
                keyword={value}
                onKeywordChange={handleKeywordChange}
                onSearch={handleSearch}
            />
            <UserList
                users={users}
                onDelete={handleDelete}
            />
            <Button>Add</Button>
        </>
    )
}


