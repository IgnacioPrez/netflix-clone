import { baseUrl, MyKey, searchUrl } from "./movie.service"

export const getServices = async (url,key) => {
    try {
        const response = await fetch(`${url}?api_key=${key}&language=es`)
        const {results} = await response.json()
        return results
    }
    catch{
        throw new Error("http request failed")
    }
}



export const searchMovies = async (query) => {
    if (query === "") return null;
    let newUrl = `${baseUrl}${searchUrl}?api_key=${MyKey}&query=${query}`;
    try {
      const data = await fetch(newUrl);
      const { results } = await data.json();
      return results;
    } catch (e) {
      throw new Error("The get search is failed");
    }
  };