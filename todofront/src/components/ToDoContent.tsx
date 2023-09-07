import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom'; 
import { getToDoItemDetail } from '../apis/api';

type Props = {
  id: string;
  title: string;
}

export const ToDoContent: React.FC<Props> = ({id, title }) => {
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

    return (
        <Stack
            onClick={onClick}
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
