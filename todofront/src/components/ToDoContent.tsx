import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

type Props = {
  id: string
  title: string
}

export const ToDoContent: React.FC<Props> = ({ title }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      border="1px solid #ccc"
      padding="8px"
      borderRadius="4px"
    >
      <Typography variant="h6">{title}</Typography>
      <Button variant="contained" style={{ backgroundColor: '#555' }}>
        削除
      </Button>
    </Stack>
  )
}
