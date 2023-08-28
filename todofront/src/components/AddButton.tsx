import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

interface AddItem {
}
const AddButton: React.FC<AddItem> = ({ }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <Button variant="outlined" endIcon={<AddIcon />}>
            追加
            </Button>
        </div>
    );
}
export default AddButton;