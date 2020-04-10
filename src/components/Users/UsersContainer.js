import React from "react";
import Users from "./Users";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUsers} from "../../Redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
               this.props.setUsers(response.data);
            });
    }

    render() {
        return (
            <Users {...this.props.usersPage}/>
        )
    }
}

export default connect(mapStateToProps, {setUsers})(UsersContainer);