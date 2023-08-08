import axios from "axios";
import { TMDB_API_KEY } from '@env'

const apikey = `${TMDB_API_KEY}`
const apiToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWExZDQ2MjdmZDljODY4ZWI5MTgwMTdlOGM0MzM3MCIsInN1YiI6IjYzOTJmMzY5NmUwZDcyMDBjMTk4NTZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t5lc3rRSksLl6b7jlOSetRSMCFmUiNCiY67ajFkWB5c'
//endpoints
const baseUrl = 'https://api.themoviedb.org/3'
const trendingMovies = `${baseUrl}/trending/movie/day?api_key=${apikey}`
const upcomingMovies = `${baseUrl}/movie/upcoming?access_token=${apiToken}`
// const popularMovies = `${baseUrl}/movie/upcoming?access_token=${apiToken}`;
const topRated = `${baseUrl}/movie/top_rated?api_key=${apikey}`
const popularMovies = `${baseUrl}/popular?api_key=${apikey}`
export const image800 = (path) =>
  path ? `https://image.tmdb.org/t/p/w780/${path}` : null
export const image500 = path=>path? `https://image.tmdb.org/t/p/w500/${path}` : null;
export const image342 = path=>path? `https://image.tmdb.org/t/p/w342/${path}` : null;
export const image185 = path=>path? `https://image.tmdb.org/t/p/w185/${path}` : null;
// fallback images 
export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';
// endpoints with dynamic params

// movie
const movieDetailsEndpoint = id=> `${baseUrl}/movie/${id}?api_key=${apikey}`;
const movieCreditsEndpoint = id=> `${baseUrl}/movie/${id}/credits?api_key=${apikey}`;
const similarMoviesEndpoint = id=> `${baseUrl}/movie/${id}/similar?api_key=${apikey}`;

// person
const personDetailsEndpoint = id=> `${baseUrl}/person/${id}?api_key=${apikey}`;
const personMoviesEndpoint = id=> `${baseUrl}/person/${id}/movie_credits?api_key=${apikey}`;



const apiCall = async(endPoint,params)=>{
    const options = {
        method: 'GET',
        url:endPoint,
        params:params? params:{}
    }
    try{
        const response = await axios.request(options);
        return response.data;
        
    }catch(err){
        console.log(err)
        return {}
    }
}

// home screen apis
export const fetchTrendingMovies = () =>{
    return(apiCall(trendingMovies));    
}
export const fetchupComingMovies = () =>{
    return(apiCall(upcomingMovies));
}
export const fetchTopRatedMovies = () =>{
    return(apiCall(topRated));
}
// movie screen apis
export const fetchMovieDetails = (id)=>{
    return apiCall(movieDetailsEndpoint(id));
}
export const fetchMovieCredits = (movieId)=>{
    return apiCall(movieCreditsEndpoint(movieId));
}
export const fetchSimilarMovies = (movieId)=>{
    return apiCall(similarMoviesEndpoint(movieId));
}