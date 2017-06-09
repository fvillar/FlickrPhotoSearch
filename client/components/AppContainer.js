import { connect } from 'react-redux';
import Main from './Main';

function mapStateToProps(state) {
    return {
        photos: state.photos
    };
}

const App = connect(mapStateToProps)(Main);

export default App;