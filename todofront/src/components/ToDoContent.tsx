import React from 'react';
import { ToDoItem, SearchInputProps, Props, ToDoItemDetail } from '../types/type';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';


export const ToDoContent: React.FC<ToDoItem> = ({title }) => {
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

export const AddButton: React.FC<Props> = ({ }) => {
    return (
        <Stack direction="row" alignItems="center">
             <Button variant="outlined" color = "inherit" endIcon={<AddIcon />}>
            追加
            </Button>
        </Stack>
    );
};

export const ToDoDetail: React.FC<ToDoItemDetail> = ({title, description,created_at}) => {
    return (
        <Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h3">{title}</Typography>
                <Button variant='outlined' color='inherit'>編集</Button>
            </Stack>
            <Typography variant="body2" color='lightgray'>{created_at}</Typography>
            <Typography variant="body1">{description}</Typography>
        </Stack>
    );
};
