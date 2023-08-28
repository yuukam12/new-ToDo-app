import React from 'react';
import ToDoContent from '../components/ToDoContent';
import SearchWindow from '../components/SearchWindow';
import AddButton from '../components/AddButton';

const ToDoList: React.FC = () => {
    const dummyData = [
        { id: '1', title: 'Task 1' },
        { id: '2', title: 'Task 2' },
        { id: '3', title: 'Task 3' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '10px' }}>
                <SearchWindow />
            </div>
            <div style={{ marginLeft: 'auto', marginBottom: '10px'}}>
                <AddButton />
            </div>
            {dummyData.map((item) => (
                <ToDoContent id={item.id} title={item.title} />
            ))}
        </div>

    );
};

export default ToDoList;
