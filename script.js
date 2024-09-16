require("dotenv").config();
const fetch = require("isomorphic-fetch");

// Print out value of API key stored in .env file
 async function getImage(query) {
  try {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
    const response = await fetch(endpoint);
    const data = await response.json().then((data) => {
      // console.log(data);
      data.data.forEach((Element) => {
        // console.log(Element.images.original.url);
        console.log(Element);
        
      });
    });
  } catch (err) {
    console.log(err);
  }
}



// console.log(getImage('dogs'));
