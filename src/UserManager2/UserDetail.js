import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrapper } from './SearchPanel';
import { addUser, getUser, updateUser } from './server';

export const Header = styled.h1``;
export const Form = styled.form``;
export const Label = styled.label``;
export const Input = styled.input``;
export const Button = styled.button``;

export default function UserDetail({ onCancel, userId, onSave }) {

    console.log(userId);

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(
        () => {
            if (userId) {
                getUser(userId)
                    .then(user => {
                        setName(user.name);
                        setUserName(user.userName);
                    })
            }
        },
        [userId]
    )

    function isEditingMode() {
        return !!userId
    }

    function handleSave() {
        if (isEditingMode()) {
            updateUser({
                name,
                userName,
                id: userId
            }).then(() => onSave())
        } else {
            addUser({
                name,
                userName,
                // id: userId
            }).then(() => onSave())
        }
    }

    return (
        <>
            <Header>User Detail</Header>
            <Form>
                <Wrapper>
                    <Label>Name: </Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                </Wrapper>
                <Wrapper>
                    <Label>UserName: </Label>
                    <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
                </Wrapper>
            </Form>
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={onCancel}>Cancel</Button>
        </>
    )
}
