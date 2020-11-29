import React from 'react'
import ListItem from './ListItem'
import { Wrapper } from './SearchPanel'
import { Button, Label } from './UserDetail'

export default function UserListItem({ name, onDelete, onEdit }) {

    return (
        <ListItem>
            <Wrapper>
                <Label>{name}</Label>
                <Button onClick={onEdit}>Edit</Button>
                <Button onClick={onDelete}>Delete</Button>
            </Wrapper>
        </ListItem>
    )
}
