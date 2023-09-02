import { BASE_URL } from "../constants/constant";

export async function fetchToDoItems() {
    const response = await fetch(`${BASE_URL}/todos`);
    const data = await response.json();
    return data;
}

export async function fetchToDoItemDetail(id: string) {
    const response = await fetch(`${BASE_URL}/todos/${id}`);
    const data = await response.json();
    return data;
  }
