import React from "react";
import style from './Profile.module.css'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
               // this.props.toggleIsFetching(false)
                this.props.setUserProfile(response.data)
            })
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

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer)
