import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToDoItemDetail, deleteToDoItem } from '../apis/api';
import {
    Dialog,
    DialogContent,
    DialogActions,
    Typography,
    Stack,
    Button,
  } from '@mui/material';

type Props = {
  id: string;
  title: string;
  fetchData: () => void ;
}

export const ToDoContent: React.FC<Props> = ({id, title, fetchData }) => {
    const navigate = useNavigate();
    //const setItemDetail = useState<ToDoItemDetail | null>(null);
    const onClick = () => {
        console.log('ToDoContent clicked with ID:', id);
        getToDoItemDetail(id)
      .then(() => {
        navigate(`/todos/${id}`);
      })
      .catch((error) => {
        console.error('Error fetching item detail:', error);
      });
    };

    const [isOpen, setIsOpen] = useState(false);

    const deleteItem = async () => {
        try {
          await deleteToDoItem(id);
          await fetchData();
          setIsOpen(false);
          console.log("Data fetched after deletion");
        } catch (error) {
          console.error("Error deleting or fetching data:", error);
        }
    };

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            border="1px solid #ccc"
            padding="8px"
            borderRadius="4px"
        >
            <Typography variant="h6" onClick={onClick}>{title}</Typography>
            <Button variant="contained"  style={{ backgroundColor: '#555'}} onClick={()=>setIsOpen(true)}>
                削除
            </Button>
            <Dialog open={isOpen}>
                <DialogContent>
                削除しますか?
                </DialogContent>
                <DialogActions>
                    <Button onClick={deleteItem} >
                        削除する
                    </Button>
                    <Button onClick={() => setIsOpen(false)}>
                        キャンセル
                    </Button>
                </DialogActions>
            </Dialog>
        </Stack>
    );
};
