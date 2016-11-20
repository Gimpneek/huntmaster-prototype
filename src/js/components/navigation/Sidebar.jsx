import React from "react"
import { Link } from "react-router"
import UserStore from "../../stores/UserStore"

export default class Sidebar extends React.Component {
    constructor(){
        super();
        this.state = {
            user: UserStore.getUser(),
        }
    }
    render() {
        const { user } = this.state;
        const name = user.firstName +  " " + user.lastName;
        return (
            <div className="ui right sidebar vertical menu under-menu">
                <h2 className="item">{name}</h2>
                <Link className="item" to="/jobs">Job Hunting Board</Link>
                <Link className="item" to="/resumes">My CVs</Link>
                <Link className="item" to="/stories">My Stories</Link>
                <Link className="item" to="/profile">User Profile</Link>
                <a className="item">Settings</a>
            </div>
        )
    }
}