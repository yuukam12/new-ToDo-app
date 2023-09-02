import React, { useEffect, useState } from 'react';
import { fetchToDoItemDetail } from '../apis/api';
import {ToDoDetail} from '../components/ToDoContent';
import Stack from '@mui/material/Stack';
import { ToDoItemDetail } from '../types/type';
import { useParams } from 'react-router-dom';

const ToDoDetailPage: React.FC = () => {
    const [itemDetail, setItemDetail] = useState<ToDoItemDetail | null>(null);
    const { id } = useParams();

    useEffect(() => {
        // データを非同期に取得
        async function fetchData() {
          try {
            if (id) {
              // 文字列型のIDをそのまま使用
              const data = await fetchToDoItemDetail(id);
              setItemDetail(data);
            }
          } catch (error) {
            console.error('Error fetching item detail:', error);
          }
        }    
    
        if (id) {
          fetchData();
        }
    }, [id]); // コンポーネントがマウントされたときにデータを取得
    
    return(
        <Stack>
            {itemDetail ? (
          <ToDoDetail
            id={itemDetail.id}
            title={itemDetail.title}
            description={itemDetail.description}
            created_at={itemDetail.created_at}
          />
        ) : (
          <Stack>Loading...</Stack>
        )}
      </Stack>
    );
}
export default ToDoDetailPage;