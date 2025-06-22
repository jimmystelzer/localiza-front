const API_URL = 'https://fakestoreapi.in/api';

async function get(url: string) {
  const response = await fetch(`${API_URL}${url}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export const apiClient = {
  get,
};
