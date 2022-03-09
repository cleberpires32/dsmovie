import {ReactComponent as StarFull} from 'asserts/img/start-full.svg'
import {ReactComponent as StarHalf} from 'asserts/img/start-half.svg'
import {ReactComponent as StarEmpty} from 'asserts/img/start-empty.svg'
import './style.css';
function MovieStars() {

    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;