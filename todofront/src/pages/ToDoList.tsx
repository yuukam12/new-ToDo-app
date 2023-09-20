import React, { useEffect, useState } from 'react';
import { ToDoItem } from '../types/type'
import { getToDoItems } from '../apis/api';
import { ToDoContent }from '../components/ToDoContent';
import { AddButton } from '../components/AddButton';
import { SearchWindow } from '../components/SearchWindow';
import Stack from '@mui/material/Stack';

const ToDoList: React.FC = () => {
    const [items, setItems] = useState<ToDoItem[]>([]);

    const fetchData = async () => {
        try {
          const data = await getToDoItems();
          setItems(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
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
                <ToDoContent key = {item.id} id={item.id} title={item.title} fetchData={fetchData}/>
            ))}
        </Stack>

    );
};

export default ToDoList;
