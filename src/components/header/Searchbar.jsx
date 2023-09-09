import { InputBase, Box, styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
export default function Searchbar() {
    const Searchcontainer = styled(Box)`
    background:white;
    width:35%;
    border-radius:2px;
    margin-left:12px;
    display:flex
    `
    const InputaBseline = styled(InputBase)`
    
    padding-left:20px;
    width:100%;
    `
    const Searchbox = styled(Box)` 
    color:blue;
    margin-top:4px;
    `
    return (
        <Searchcontainer >
            <InputaBseline placeholder='Search for products,brands and more'
             />
            <Searchbox>
                <SearchIcon />
            </Searchbox>
        </Searchcontainer>

    )
}
