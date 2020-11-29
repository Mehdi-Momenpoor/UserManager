import React, { useState } from 'react';
import SearchPanel from './SearchPanel';
import { deleteUser, getUsers } from './server';
import { Button, Header } from './UserDetail';
import UserList from './UserList';

export default function UserManager({ onAdd, onEdit }) {

    const [users, setUsers] = useState([]);
    const [value, setValue] = useState('');

    function handleKeywordChange(e) {
        setValue(e.target.value)
    }

    async function handleSearch() {
        const users = await getUsers(value);
        setUsers(users);
    }

    async function handleDelete(id) {
        console.log(id);
        await deleteUser(id);
        handleSearch();
    }

    return (
        <>
            <Header>User Manager</Header>
            <SearchPanel
                keyword={value}
                onKeywordChange={handleKeywordChange}
                onSearch={handleSearch}
            />
            <UserList
                users={users}
                onDelete={handleDelete}
                onEdit={onEdit}
            />
            <Button onClick={onAdd}>Add</Button>
        </>
    )
}