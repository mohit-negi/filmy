import axios from "axios";


//endpoints
const baseUrl = 'https://api.themoviedb.org/3'
const apikey = '123';
const instance = axios.create({
    baseURL: `${baseUrl}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 51a1d4627fd9c868eb918017e8c43370`
    },
    responseType: "json",
    withCredentials: true,
  })
  
export const urls = {
    getTrendingMovies : '/trending/movie/day',
    getUpcomingMovies : '/movie/upcoming',
    getTopRatedMovies : '/movie/top_rated',
    getPopularMovies : '/movie/popular'
}
export default instance;