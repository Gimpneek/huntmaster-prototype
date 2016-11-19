import React from "react"

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="ui right sidebar vertical menu under-menu">
                <a className="item">Job Hunting Board</a>
                <a className="item">My CVs</a>
                <a className="item">My Stories</a>
                <a className="item">User Profile</a>
                <a className="item">Application Archive</a>
                <a className="item">Job Board Settings</a>
                <a className="item">Settings</a>
            </div>
        )
    }
}