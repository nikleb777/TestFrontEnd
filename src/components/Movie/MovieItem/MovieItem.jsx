import './MovieItem.css'

function MovieItem ({movie}) {
  return <li className='movie-item'>{movie.title} ({movie.year})</li>
}

export default MovieItem;