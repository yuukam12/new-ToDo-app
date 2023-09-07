import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

export const AddButton: React.FC = () => {
    return (
        <Stack direction="row" alignItems="center">
             <Button variant="outlined" color = "inherit" endIcon={<AddIcon />}>
            追加
            </Button>
        </Stack>
    );
};