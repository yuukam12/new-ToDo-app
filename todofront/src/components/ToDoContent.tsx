import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface ToDoItem {
    id: string;
    title: string;
}

const ToDoContent: React.FC<ToDoItem> = ({ title }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' , border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}>
            <Typography variant="h6">{title}</Typography>
            <Button variant="contained">削除</Button>
        </div>
    );
};

export default ToDoContent;
