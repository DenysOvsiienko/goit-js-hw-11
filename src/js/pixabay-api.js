export const fetchImages = requestInput => {
  return fetch(
    'https://pixabay.com/api/?key=' +
      '44175237-f9b9fdf7256a15d8718cda915' +
      '&q=' +
      encodeURIComponent(requestInput) +
      '&image_type=photo' +
      '&orientation=horizontal' +
      '&safesearch=true'
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
