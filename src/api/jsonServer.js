import axios from "axios";
import { TMDB_API_KEY } from '@env'

//endpoints
const baseUrl = 'https://api.themoviedb.org/3'
const apikey = '123'
const instance = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TMDB_API_KEY}`,
  },
  responseType: 'json',
  withCredentials: true,
})
  
export const urls = {
    getTrendingMovies : '/trending/movie/day',
    getUpcomingMovies : '/movie/upcoming',
    getTopRatedMovies : '/movie/top_rated',
    getPopularMovies : '/movie/popular'
}
export default instance;