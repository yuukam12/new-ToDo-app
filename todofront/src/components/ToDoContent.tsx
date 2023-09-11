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
  onDelete: () => void ;
}

export const ToDoContent: React.FC<Props> = ({id, title, onDelete }) => {
    const navigate = useNavigate();
    //const setItemDetail = useState<ToDoItemDetail | null>(null);
    const onClick = () => {
        // ToDoContentがクリックされたときの処理
        console.log('ToDoContent clicked with ID:', id);
        getToDoItemDetail(id)
      .then(() => {
        // 取得した詳細情報を表示

        navigate(`/todos/${id}`);
      })
      .catch((error) => {
        console.error('Error fetching item detail:', error);
      });
    };

    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    const deleteButtonClick = ()=>{
        setIsConfirmationOpen(true)
    }
    const deleteItem = ()=>{
        deleteToDoItem(id)
        setIsConfirmationOpen(false)
        onDelete();
    }

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
            <Button variant="contained"  style={{ backgroundColor: '#555'}} onClick={deleteButtonClick}>
                削除
            </Button>
            <Dialog open={isConfirmationOpen}>
                <DialogContent>
                削除しますか?
                </DialogContent>
                <DialogActions>
                    <Button onClick={deleteItem} >
                        削除する
                    </Button>
                    <Button onClick={() => setIsConfirmationOpen(false)}>
                        キャンセル
                    </Button>
                </DialogActions>
            </Dialog>
        </Stack>
    );
};
