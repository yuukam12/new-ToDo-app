import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { ToDoModal } from './ToDoModal';
import { postToDoItem } from '../apis/api';

type Props ={
    fetchData: () => void;
}
export const AddButton: React.FC<Props> = ({fetchData}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = async (title: string, description: string) =>{
        try{
            await postToDoItem(title, description);
            await fetchData();
            setIsOpen(false);
            console.log("Data fetched after deletion");
        } catch (error) {
          console.error("Error deleting or fetching data:", error);
        }
    }
    return (
        <Stack direction="row" alignItems="center">
             <Button onClick ={()=>setIsOpen(true)} variant="outlined" color = "inherit" endIcon={<AddIcon />}>
            追加
            </Button>

        <ToDoModal
        open={isOpen}
        onClick={onClick}
        onClose={()=>setIsOpen(false)}
        Title={''}
        Description={''}
        />
        </Stack>
    );
};