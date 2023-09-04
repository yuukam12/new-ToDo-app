import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DateFormatter } from '../helpers/DateFormatter';

type Props = {
    id: string;
    title: string;
    description: string;
    created_at: string;
}
export const ToDoDetail: React.FC<Props> = ({title, description,created_at}) => {
    return (
        <Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h3">{title}</Typography>
                <Button variant='outlined' color='inherit'>編集</Button>
            </Stack>
            <Typography variant="body2" color='lightgray'>
                作成日： <DateFormatter UnformattedDate={created_at} />
            </Typography>
            <Typography variant="body1">{description}</Typography>
        </Stack>
    );
};
