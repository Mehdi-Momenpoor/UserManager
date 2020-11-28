import React from 'react';
import styled from 'styled-components';

export const Header = styled.h1``;
export const Form = styled.form``;
export const Label = styled.label``;
export const Input = styled.input``;
export const Button = styled.button``;

export default function UserDetail() {
    return (
        <>
            <Header>User</Header>
            <Form>
                <Label>Name: </Label>
                <Input />
            </Form>
            <Button>Save</Button>
            <Button>Back</Button>
        </>
    )
}
