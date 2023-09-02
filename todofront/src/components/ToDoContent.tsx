import React from 'react';
import { ToDoItem, SearchInputProps, Props,  ToDoItemDetail} from '../types/type';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom'; 
import { fetchToDoItemDetail } from '../apis/api';


export const ToDoContent: React.FC<ToDoItem> = ({id, title }) => {
    const navigate = useNavigate();
    //const setItemDetail = useState<ToDoItemDetail | null>(null);
    const handleClick = () => {
        // ToDoContentがクリックされたときの処理
        console.log('ToDoContent clicked with ID:', id);
        fetchToDoItemDetail(id)
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
            onClick={handleClick}
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
    const date = new Date(created_at);
    const year = date.getFullYear(); // 年
    const month = date.getMonth() + 1; // 月 (0から始まるため、+1する)
    const day = date.getDate(); // 日
    const formattedDate = `${year}年${month}月${day}日`;
    return (
        <Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h3">{title}</Typography>
                <Button variant='outlined' color='inherit'>編集</Button>
            </Stack>
            <Typography variant="body2" color='lightgray'>
                作成日： {formattedDate}
            </Typography>
            <Typography variant="body1">{description}</Typography>
        </Stack>
    );
};
