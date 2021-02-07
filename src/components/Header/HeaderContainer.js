import {NavLink} from "react-router-dom";
import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMeThunk} from "../../redux/auth-reducer";



class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMeThunk()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email
})

export default connect(mapStateToProps, {authMeThunk})(HeaderContainer)
