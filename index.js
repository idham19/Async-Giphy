const searchForm = document.getElementById("search-form");
const searchQueryInput = document.getElementById("search-query");

async function getImage(query) {
  try {
    query = searchQueryInput.value;
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=100&offset=0&rating=g&lang=en`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const imagesContainer = document.getElementById("imagesContainer");
  imagesContainer.innerHTML = "";

  try {
    const gifs = await getImage(searchQueryInput.value);

    gifs.forEach((gif) => {
      const imgElement = document.createElement("img");
      imgElement.src = gif.images.original.url; // Set image source to GIF URL
      imgElement.alt = gif.title; // Optionally set the alt text to the GIF's title
      imagesContainer.appendChild(imgElement); // Add image to the container
    });
  } catch (error) {
    console.error("Error fetching images:", error);
  }
});
