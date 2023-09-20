import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DateFormatter } from '../helpers/DateFormatter';
import { ToDoModal } from './ToDoModal';

type Props = {
    id: string;
    title: string;
    description: string;
    created_at: string;
}

export const ToDoDetail: React.FC<Props> = ({ id, title, description, created_at }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h3">{title}</Typography>
                <Button variant='outlined' color='inherit' onClick={() => setIsOpen(true)}>編集</Button>
            </Stack>
            <Typography variant="body2" color='lightgray'>
                作成日： <DateFormatter UnformattedDate={created_at} />
            </Typography>
            <Typography variant="body1">{description}</Typography>

            <ToDoModal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            id={id}
            title={title}
            description={description}
            />
        </Stack>
    );
};