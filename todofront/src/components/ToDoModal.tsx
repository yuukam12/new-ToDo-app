import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography
} from '@mui/material';

type Props = {
  open: boolean;
  onClick: (title: string, description: string) => void;
  onClose: () => void;
  Title: string;
  Description: string;
};

export const ToDoModal: React.FC<Props> = ({ open, onClick, onClose, Title, Description}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setTitle(Title);
    }, [Title]); //Titleの初期値に編集前のtitleを入れる
    useEffect(() => {
        setDescription(Description);
    }, [Description]);

    const onConfirmClose = () => {//アラート
        setIsOpen(false);
        onClose();
    };

    return (
        <div>
        <Dialog open={open} onClose={() => setIsOpen(true)}>
            <DialogContent>
                <Typography>タイトル</Typography>
                <TextField
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    variant="outlined"
                />
                <Typography>詳細</Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    variant="outlined"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setIsOpen(true)} variant="contained"  style={{ backgroundColor: '#555'}}>
                    破棄
                </Button>
                <Button onClick={() => onClick(title, description)} variant="contained"  style={{ backgroundColor: '#555'}}>
                    作成
                </Button>
            </DialogActions>
        </Dialog>
        {/* 確認アラート */}
        <Dialog open={isOpen}>
            <DialogContent>
            破棄しますか?
            </DialogContent>
            <DialogActions>
                <Button onClick={onConfirmClose} >
                    破棄する
                </Button>
                <Button onClick={() => setIsOpen(false)}>
                    編集を続ける
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
};
