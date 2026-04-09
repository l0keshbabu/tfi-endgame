import { movies } from "../data/movies";
export function getRandomMovie(){
    const randomIndex=Math.floor(Math.random()*movies.length)
    return movies[randomIndex]
}