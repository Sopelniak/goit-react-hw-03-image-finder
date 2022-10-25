export const imgsRequest = async (value, page) => {
  const response = await fetch(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=30807685-8e6cd00353cc1057d11bd8bf4&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
};
