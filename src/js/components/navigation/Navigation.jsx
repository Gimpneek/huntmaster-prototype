import React from "react"
import Menu from "./Menu"
import Sidebar from "./Sidebar"

export default class Navigation extends React.Component{
    render(){
        return (
            <div id="huntmaster-container">
                <Menu/>
                <Sidebar/>
                {this.props.children}
            </div>
        )
    }
}