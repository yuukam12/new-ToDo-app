const BASE_URL = 'http://127.0.0.1:8000/ToDo'; 

export async function fetchItems() {
    const response = await fetch(`${BASE_URL}/todos/`);
    const data = await response.json();
    return data;
}
