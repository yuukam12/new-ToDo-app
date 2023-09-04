import React, { useEffect, useState } from 'react';
import { ToDoItem } from '../types/type'
import { fetchToDoItems } from '../apis/api';
import { ToDoContent }from '../components/ToDoContent';
import { AddButton } from '../components/AddButton';
import { SearchWindow } from '../components/SearchWindow';
import Stack from '@mui/material/Stack';

const ToDoList: React.FC = () => {
    const [items, setItems] = useState<ToDoItem[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchToDoItems();
                setItems(data);
            } catch (error) {
                // エラーが発生した場合の処理
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []); 
    
    return (
        <Stack direction="column">
            <Stack style={{ marginBottom: '10px' }}>
                <SearchWindow />
            </Stack>
            <Stack style={{ marginLeft: 'auto', marginBottom: '10px'}}>
                <AddButton />
            </Stack>
            {items.map((item) => (
                <ToDoContent key = {item.id} id={item.id} title={item.title} />
            ))}
        </Stack>

    );
};

export default ToDoList;
