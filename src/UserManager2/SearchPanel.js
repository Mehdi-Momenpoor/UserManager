import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from './UserDetail';

export const Wrapper = styled.div``;

export default function SearchPanel({ onSearch, keyword, onKeywordChange }) {

    return (
        <Wrapper>
            <Input value={keyword} onChange={onKeywordChange} />
            <Button onClick={onSearch}>Search</Button>
        </Wrapper>
    )
}
 