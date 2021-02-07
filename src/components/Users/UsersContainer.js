import React from "react";
import {connect} from "react-redux";
import {
    followThunk, getUsersThunkCreator, unfollowThunk,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        /* this.props.toggleIsFetching(true)
             getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                 this.props.toggleIsFetching(false)
                 this.props.setUsers(data.items)
                 this.props.setTotalUsersCount(data.totalCount)
             })*/
    }

    changePage = (page) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize)
        /* this.props.toggleIsFetching(true)
         this.props.setCurrentPage(page)
         getUsers(page,this.props.pageSize).then(data => {
                 this.props.setUsers(data.items)
             })
         this.props.toggleIsFetching(false)*/
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   changePage={this.changePage}
                   follow={this.props.followThunk}
                   unfollow={this.props.unfollowThunk}
                   followingInProgress={this.props.followingInProgress}/>
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}*/

export default connect(mapStateToProps,
    {followThunk, unfollowThunk, getUsersThunkCreator})(UsersContainer)


