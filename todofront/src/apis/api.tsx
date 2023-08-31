import { BASE_URL } from "../constants/constant";

export async function fetchToDoItems() {
    const response = await fetch(`${BASE_URL}/todos`);
    const data = await response.json();
    return data;
}

