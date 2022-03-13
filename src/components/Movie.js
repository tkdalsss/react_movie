import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Movie.css';

function Movie({id, coverImg, title, year, summary, genres}){
    return (
      <div class="MovieFrame">
        <img src={coverImg} alt={title} class="MovieImg"/>
        <h2 class="MovieTitle">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 class="MovieYear">{year}</h3>
        <div class="MovieSummary">{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</div>
        <ul class="MovieGenres">
          {genres.map(g => <li key={g}>{g}</li>)}
        </ul>
      </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string),
}

export default Movie;