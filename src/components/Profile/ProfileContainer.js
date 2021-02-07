import React from "react";
import style from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (userId == null){
            userId = 14216
        }
        this.props.getProfileThunk(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{getProfileThunk})(WithUrlDataContainerComponent)
