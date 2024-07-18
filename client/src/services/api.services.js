export default async function fetchApi(url) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {});
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return null;
  }
}
