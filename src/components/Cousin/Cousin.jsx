import PropTypes from 'prop-types';
import Friend from '../Friend/Friend';
import Special from '../Special/Special';

const Cousin = ({ name, asset }) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            {asset && <Special asset={asset}></Special>}
            {name === 'Sadika' && <Friend></Friend>}
        </div>
    );
};
Cousin.propTypes = {
    name: PropTypes.string,
};
export default Cousin;
