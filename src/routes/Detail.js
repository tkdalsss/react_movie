import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import './Detail.css';

function Detail(){
    const { id } = useParams();
    const [movie, setmovie] = useState([]);

    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setmovie(json.data.movie);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div id ="frame">
            <h1>{movie.title}</h1> 
            <h3>{movie.year}</h3>
            <h4>★ {movie.rating}</h4>
            <img src={movie.medium_cover_image} />
            <div>
                <p>{movie.title} ({movie.year})</p>
                <ul>
                    {/*{movie.genres.map(g=><li key={g}>{g}</li>)}*/}
                </ul>
                <select>
                    <option>Intro: {movie.description_intro}</option>
                    <option>Full: {movie.description_full}</option>
                </select>
            </div>
        </div>
    );
}

export default Detail;