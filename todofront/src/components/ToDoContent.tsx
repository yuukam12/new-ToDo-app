import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

type ToDoItem = {
    id: string;
    title: string;
}
export const ToDoContent: React.FC<ToDoItem> = ({ title }) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            border="1px solid #ccc"
            padding="8px"
            borderRadius="4px"
        >
            <Typography variant="h6">{title}</Typography>
            <Button variant="contained"  style={{ backgroundColor: '#555'}} >
                削除
            </Button>
        </Stack>
    );
};

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

type Props = {
}
export const AddButton: React.FC<Props> = ({ }) => {
    return (
        <Stack direction="row" alignItems="center">
             <Button variant="outlined" color = "inherit" endIcon={<AddIcon />}>
            追加
            </Button>
        </Stack>
    );
};
