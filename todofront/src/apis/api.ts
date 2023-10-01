import axios from 'axios';
import { BASE_URL } from "../constants/constant";

const ToDoApi = axios.create({
  baseURL: BASE_URL,
});

export async function getToDoItems(keyword?: string) {
  try {
    const params = keyword ? { keyword } : {}; // Create a params object with the 'keyword' parameter if provided
    const response = await ToDoApi.get(`/todos`, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getToDoItemDetail(id: string) {
  try {
    const response = await ToDoApi.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateToDoItem(id: string, title: string, description: string) {
  try {
    await ToDoApi.put(`/todos/${id}/`, {
      title: title,
      description: description,
    });
    console.log(description)
  } catch (error) {
    throw error;
  }
}

export async function deleteToDoItem(id: string) {
  try{
    await ToDoApi.delete(`/todos/${id}/`);
    console.log('ToDoItemを削除しました');
  } catch (error){
  throw error;
  }
}

export async function postToDoItem(title: string, description: string){
  try{
    await ToDoApi.post('/todos/',{
      title: title,
      description: description,
    });
  } catch (error) {
    throw error;
  }
}

export async function searchToDoItem(keyword: string){
  try{
    const response = await ToDoApi.get('/todos',{
      params: {
        keyword: keyword,
      },
    });
    console.log("searchToDoItem")
    return response.data;
  } catch (error){
    throw error;
  }
}
