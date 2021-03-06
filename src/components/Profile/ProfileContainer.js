import React from "react";
import style from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

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
        if (!this.props.isAuth){
            return <Redirect to={'/login'}/>
        }
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{getProfileThunk})(WithUrlDataContainerComponent)
