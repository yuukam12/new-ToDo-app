import React from 'react';
import {ToDoDetail} from '../components/ToDoContent';
import Stack from '@mui/material/Stack';
import { ToDoItemDetail } from '../types/type';

const ToDoDetailPage: React.FC = () => {
    const exampleItem: ToDoItemDetail = {
        id: '1',
        title: 'Sample ToDo Item',
        description: 'This is a sample ToDo item.',
        created_at: '2023-08-30T12:34:56',
    };
    return(
        <Stack>
           <ToDoDetail id={exampleItem.id} title={exampleItem.title} description={exampleItem.description} created_at={exampleItem.created_at}/>
        </Stack>
    );
}
export default ToDoDetailPage;