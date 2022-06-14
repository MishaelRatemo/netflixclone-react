const APIKEY = '85459567afbba3a7094fe38bddbc8eb7'

const requests ={
    trendingNow:`/trending/all/week?api_key=${APIKEY}&language=en-US`,
    topRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    netflixOriginals:`/discover/movie?api_key=${APIKEY}&with_networks=123`,
    actionMovies:`/discover/movie?api_key=${APIKEY}&with_genre=28`,
    romanticMovies:`/discover/movie?api_key=${APIKEY}&wth_genre=10749`,
    comedies:`/discover/movie?api_key=${APIKEY}&with_genre=35`,
    horrorMovies:`/discover/movie?api_key=${APIKEY}&with_genre=27`,
    documentaries:`/discover/movie?api_key=${APIKEY}&with_genre=99`,
}

export default requests;