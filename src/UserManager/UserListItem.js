import React from 'react'
import { Button, Label } from './UserDetail'

export default function UserListItem({userName}) {
    return (
        <li>
            <Label>{userName}</Label>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </li>
    )
}
