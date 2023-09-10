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
  title: string;
  description: string;
};

export const ToDoModal: React.FC<Props> = ({ open, onClose, id, title, description}) => {
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    useEffect(() => {
        setTitle(title);
    }, [title]); //Titleの初期値に編集前のtitleを入れる
    useEffect(() => {
        setDescription(description);
    }, [description]); 

    const handleSave = () => {
        updateToDoItem(id, Title, Description)
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

    const handleClose = () => {
        setIsConfirmationOpen(true);
    };

    const handleConfirmClose = () => {//アラート
        setIsConfirmationOpen(false);
        onClose();
    };

    return (
        <div>
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Typography>タイトル</Typography>
                <TextField
                    fullWidth
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                    variant="outlined"
                />
                <Typography>詳細</Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                    variant="outlined"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained"  style={{ backgroundColor: '#555'}}>
                    破棄
                </Button>
                <Button onClick={handleSave} variant="contained"  style={{ backgroundColor: '#555'}}>
                    作成
                </Button>
            </DialogActions>
        </Dialog>
        {/* 確認アラート */}
        <Dialog open={isConfirmationOpen}>
            <DialogContent>
            破棄しますか?
            </DialogContent>
            <DialogActions>
                <Button onClick={handleConfirmClose} >
                    破棄する
                </Button>
                <Button onClick={() => setIsConfirmationOpen(false)}>
                    編集を続ける
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
};
