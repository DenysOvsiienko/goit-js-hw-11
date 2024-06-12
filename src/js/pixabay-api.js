import API_KEY from './api';
export const fetchImages = requestInput => {
  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
      requestInput
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
