import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';

type Props ={
    searchData: (keyword: string) => void;
}
export const SearchWindow: React.FC<Props> = ({searchData}) => {
    const [keyword, setKeyword] = useState('');

    const onClick = async () =>{
        try{
            await searchData(keyword);
            console.log("Data fetched after deletion");
        } catch (error) {
          console.error("Error deleting or fetching data:", error);
        }
    }

    return (
        <Stack direction="row" alignItems="center">
            <TextField
                label="Search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon onClick={onClick}/>
                        </InputAdornment>
                    ),
                }}
            />
        </Stack>
    );
};