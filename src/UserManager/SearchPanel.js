import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Form, Input } from './UserDetail';

const Wrapper = styled.div``;

export default function SearchPanel({onSearch}) {

    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }
    

    return (
        <div>
            <Wrapper>
                <Input value={value} onChange={handleChange}/>
                <Button onClick={() => onSearch(value)}>Search</Button>
            </Wrapper>
        </div>
    )
}
