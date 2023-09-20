import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography
} from '@mui/material';
import { updateToDoItem } from '../apis/api';

type Props = {
  open: boolean;
  onClose: () => void;
  id: string;
  Title: string;
  Description: string;
};

export const ToDoModal: React.FC<Props> = ({ open, onClose, id, Title, Description}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setTitle(Title);
    }, [Title]); //Titleの初期値に編集前のtitleを入れる
    useEffect(() => {
        setDescription(Description);
    }, [Description]); 

    const onSave = () => {
        updateToDoItem(id, title, description)
        .then(() => {
            // 成功
            console.log("ToDo アイテムが更新されました。");
        })
        .catch((error) => {
            // エラー
            console.error("ToDo アイテムの更新中にエラーが発生しました。", error);
        });
        onClose();
    };

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
                <Button onClick={onSave} variant="contained"  style={{ backgroundColor: '#555'}}>
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
