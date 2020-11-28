import React from 'react'
import ListItem from './ListItem'
import { Wrapper } from './SearchPanel'
import { Button, Label } from './UserDetail'

export default function UserListItem({ name, onDelete }) {

    return (
        <ListItem>
            <Wrapper>
                <Label>{name}</Label>
                <Button>Edit</Button>
                <Button onClick={onDelete}>Delete</Button>
            </Wrapper>
        </ListItem>
    )
}
