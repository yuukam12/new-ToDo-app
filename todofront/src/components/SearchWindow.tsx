import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';

type SearchInputProps = {
}
export const SearchWindow: React.FC<SearchInputProps> = ({ }) => {
    return (
        <Stack direction="row" alignItems="center">
            <TextField
                label="Search"
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Stack>
    );
};
