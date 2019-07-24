import {connect} from 'react-native';
import {setVisibilityFilter} from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state,ownProps) => ({
     active:ownProps.filter === state.visibilityFilter,
     filterText:ownProps.filter
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    onClick:()=> dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect({
   mapStateToProps,
   mapDispatchToProps,
})(Link);