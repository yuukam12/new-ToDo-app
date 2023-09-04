import React from 'react';
import { ToDoContent } from '../components/ToDoContent';
import { SearchWindow } from '../components/SearchWindow';
import { AddButton } from '../components/AddButton';
import Stack from '@mui/material/Stack';

const ToDoList: React.FC = () => {
    const dummyData = [
        { id: '1', title: 'Task 1' },
        { id: '2', title: 'Task 2' },
        { id: '3', title: 'Task 3' },
    ];

    return (
        <Stack direction="column">
            <Stack style={{ paddingBottom: '10px' }}>
            <SearchWindow />
            </Stack>
            <Stack style={{ marginLeft: 'auto', paddingBottom: '10px' }}>
            <AddButton />
            </Stack>
            {dummyData.map((item) => (
                <ToDoContent id={item.id} title={item.title} />
            ))}
        </Stack>
    );
};

export default ToDoList;
