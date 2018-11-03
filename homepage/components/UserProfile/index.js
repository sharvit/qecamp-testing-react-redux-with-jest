import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './UserProfileActions';
import reducer from './UserProfileReducer';
import {
  selectShowAvatar,
  selectShowPosts,
  selectShowPhotos,
} from './UserProfileSelectors';

import UserProfile from './UserProfile';

// map state to props
const mapStateToProps = state => ({
  showAvatar: selectShowAvatar(state),
  showPosts: selectShowPosts(state),
  showPhotos: selectShowPhotos(state),
});

// map action dispatchers to props
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export reducers
export const reducers = { userProfile: reducer };

// export connected component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
