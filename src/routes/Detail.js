import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import './Detail.css';

function Detail(){
    const { id } = useParams();
    const [ready, setReady] = useState(true);
    const [movie, setmovie] = useState([]);

    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setmovie(json.data.movie);
        setReady(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div class="Frame" style={{backgroundImage: `url(${movie.background_image})`}}>
            {ready ? (
                <div class="Loader">
                    <span>Loading...</span>
                </div>
             ) :
            (<div class="DetailFrame">
                <h1>{movie.title}</h1>
                <hr></hr>
                <h3>{movie.year}</h3>
                <p id="long">{movie.title_long}</p>
                <p id="rating">★ {movie.rating} / 10</p>
                <img src={movie.medium_cover_image} />
                <ul class="DetailGenres">
                    {movie.genres.map(g => <li key={g}>{g}</li>)}
                </ul>
                <div class="Intro">
                    {movie.description_intro}
                </div>
                <div class="Full">
                    {movie.description_full}
                </div>
            </div>)}   
        </div>
    );
}

export default Detail;